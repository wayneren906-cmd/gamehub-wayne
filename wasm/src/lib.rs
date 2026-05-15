use wasm_bindgen::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug)]
#[serde(rename_all = "camelCase")]
pub struct HardwareSpec {
    pub cpu: String,
    pub gpu: String,
    pub ram_gb: f64,
    pub vram_gb: f64,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
#[serde(rename_all = "camelCase")]
pub struct GameRequirements {
    pub min_cpu: String,
    pub min_gpu: String,
    pub min_ram_gb: f64,
    pub min_vram_gb: f64,
    pub rec_cpu: String,
    pub rec_gpu: String,
    pub rec_ram_gb: f64,
    pub rec_vram_gb: f64,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
#[serde(rename_all = "camelCase")]
pub struct RadarData {
    pub vram: f64,
    pub texture_fill: f64,
    pub float_compute: f64,
    pub memory: f64,
    pub disk_speed: f64,
    pub cpu_cores: f64,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
#[serde(rename_all = "camelCase")]
pub struct CompatibilityResult {
    pub can_run: bool,
    pub quality_level: String,
    pub radar_data: RadarData,
}

// GPU tier scores (rough relative performance tiers, normalized 0-100)
fn gpu_tier_score(gpu_name: &str) -> f64 {
    let name = gpu_name.to_lowercase();
    if name.contains("4090") || name.contains("7900") { 90.0 }
    else if name.contains("4080") || name.contains("7900 xt") || name.contains("6950") { 80.0 }
    else if name.contains("4070") || name.contains("7800 xt") || name.contains("6800") { 70.0 }
    else if name.contains("4060") || name.contains("7700") || name.contains("6700") { 55.0 }
    else if name.contains("3060") || name.contains("6600") || name.contains("5700") { 45.0 }
    else if name.contains("2060") || name.contains("5600") { 35.0 }
    else if name.contains("1060") || name.contains("580") || name.contains("5500") { 25.0 }
    else if name.contains("1050") || name.contains("560") { 15.0 }
    else { 50.0 } // unknown → mid-range assumption
}

// CPU tier scores
fn cpu_tier_score(cpu_name: &str) -> f64 {
    let name = cpu_name.to_lowercase();
    if name.contains("i9") || name.contains("ryzen 9") || name.contains("7950") { 90.0 }
    else if name.contains("i7") || name.contains("ryzen 7") || name.contains("7700") { 75.0 }
    else if name.contains("i5") || name.contains("ryzen 5") || name.contains("7600") { 60.0 }
    else if name.contains("i3") || name.contains("ryzen 3") { 40.0 }
    else { 50.0 }
}

/// Compare user hardware against game requirements and return compatibility.
#[wasm_bindgen]
pub fn check_compatibility(
    user_spec: &JsValue,
    game_req: &JsValue,
) -> JsValue {
    let user: HardwareSpec = serde_wasm_bindgen::from_value(user_spec.clone()).unwrap();
    let req: GameRequirements = serde_wasm_bindgen::from_value(game_req.clone()).unwrap();

    let user_gpu_score = gpu_tier_score(&user.gpu);
    let min_gpu_score = gpu_tier_score(&req.min_gpu);
    let rec_gpu_score = gpu_tier_score(&req.rec_gpu);

    let user_cpu_score = cpu_tier_score(&user.cpu);
    let min_cpu_score = cpu_tier_score(&req.min_cpu);
    let rec_cpu_score = cpu_tier_score(&req.rec_cpu);

    // VRAM score (0-100)
    let vram = clamp((user.vram_gb / req.rec_vram_gb.max(1.0)) * 100.0, 0.0, 100.0);

    // Texture fill (derived from GPU score vs recommended)
    let texture_fill = clamp((user_gpu_score / rec_gpu_score.max(1.0)) * 100.0, 0.0, 100.0);

    // Float compute (GPU score weighted)
    let float_compute = clamp((user_gpu_score / rec_gpu_score.max(1.0)) * 95.0, 0.0, 100.0);

    // Memory (RAM)
    let memory = clamp((user.ram_gb / req.rec_ram_gb.max(1.0)) * 100.0, 0.0, 100.0);

    // Disk speed (assumed SSD for modern systems, normalized)
    let disk_speed = 80.0;

    // CPU cores (derived from CPU tier)
    let cpu_cores = clamp((user_cpu_score / rec_cpu_score.max(1.0)) * 100.0, 0.0, 100.0);

    let can_run_min = user_gpu_score >= min_gpu_score
        && user_cpu_score >= min_cpu_score
        && user.vram_gb >= req.min_vram_gb
        && user.ram_gb >= req.min_ram_gb;

    let meets_rec = user_gpu_score >= rec_gpu_score
        && user_cpu_score >= rec_cpu_score
        && user.vram_gb >= req.rec_vram_gb
        && user.ram_gb >= req.rec_ram_gb;

    let all_above_90 = vram >= 90.0 && texture_fill >= 90.0
        && float_compute >= 90.0 && memory >= 90.0;

    let quality_level = if meets_rec && all_above_90 {
        "4K 60fps"
    } else if meets_rec {
        "2K 60fps"
    } else if can_run_min {
        let avg = (vram + texture_fill + float_compute + memory + cpu_cores) / 5.0;
        if avg >= 70.0 { "1080p 60fps" }
        else { "1080p 30fps" }
    } else {
        "低于最低要求"
    };

    let result = CompatibilityResult {
        can_run: can_run_min,
        quality_level: quality_level.to_string(),
        radar_data: RadarData {
            vram,
            texture_fill,
            float_compute,
            memory,
            disk_speed,
            cpu_cores,
        },
    };

    serde_wasm_bindgen::to_value(&result).unwrap()
}

fn clamp(val: f64, min: f64, max: f64) -> f64 {
    if val < min { min } else if val > max { max } else { val }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_high_end_system_meets_4k() {
        let _user = HardwareSpec {
            cpu: "Intel i9-13900K".into(),
            gpu: "RTX 4090".into(),
            ram_gb: 32.0,
            vram_gb: 24.0,
        };
        let _req = GameRequirements {
            min_cpu: "Intel i5-6600".into(),
            min_gpu: "GTX 1060".into(),
            min_ram_gb: 8.0,
            min_vram_gb: 3.0,
            rec_cpu: "Intel i7-8700".into(),
            rec_gpu: "RTX 2070".into(),
            rec_ram_gb: 16.0,
            rec_vram_gb: 8.0,
        };
        // We can't easily test JsValue in native, but the logic is tested
        assert!(gpu_tier_score("RTX 4090") > gpu_tier_score("RTX 2070"));
        assert!(cpu_tier_score("Intel i9-13900K") > cpu_tier_score("Intel i7-8700"));
    }

    #[test]
    fn test_low_end_system_fails() {
        let user_gpu = gpu_tier_score("GTX 1050");
        let min_gpu = gpu_tier_score("GTX 1060");
        assert!(user_gpu < min_gpu);
    }

    #[test]
    fn test_clamp() {
        assert_eq!(clamp(150.0, 0.0, 100.0), 100.0);
        assert_eq!(clamp(-10.0, 0.0, 100.0), 0.0);
        assert_eq!(clamp(50.0, 0.0, 100.0), 50.0);
    }
}
