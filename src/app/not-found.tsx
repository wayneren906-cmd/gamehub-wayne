import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-[#1a1a1a]">404</h1>
        <p className="text-[#999]">页面未找到</p>
        <Link href="/" className="inline-block px-5 py-2.5 bg-[#15B04F] hover:bg-[#149a46] text-white rounded-lg font-medium transition-colors">
          返回首页
        </Link>
      </div>
    </div>
  );
}
