import Link from "next/link";

export function Navbar() {
  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 h-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="heading-high text-xl tracking-tight">
          GameHub
        </Link>
        <div className="flex items-center gap-6 text-zinc-400 text-sm font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            探索
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            排行榜
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            关于
          </Link>
        </div>
      </div>
    </nav>
  );
}
