import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="heading-high text-6xl">404</h1>
        <p className="text-zinc-400">页面未找到</p>
        <Link href="/" className="inline-block px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors">
          返回首页
        </Link>
      </div>
    </div>
  );
}
