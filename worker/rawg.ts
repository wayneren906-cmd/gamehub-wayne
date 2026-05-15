const RAWG_BASE = "https://api.rawg.io/api";

export async function fetchFromRawg(
  path: string,
  params: URLSearchParams,
  apiKey: string
): Promise<Response> {
  const url = new URL(`${RAWG_BASE}${path}`);
  params.set("key", apiKey);
  url.search = params.toString();

  const response = await fetch(url.toString(), {
    headers: {
      "Accept": "application/json",
      "User-Agent": "GameHub/1.0 (Cloudflare Worker)",
    },
  });

  if (!response.ok) {
    console.error(`RAWG API error: ${response.status} ${response.statusText}`);
    return new Response(
      JSON.stringify({
        error: "Upstream API error",
        status: response.status,
      }),
      {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return response;
}
