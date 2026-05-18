"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-[#999] mb-4">
      <Link href="/" className="hover:text-[#15B04F] transition-colors">
        首页
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={12} />
          {item.href ? (
            <Link href={item.href} className="hover:text-[#15B04F] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#666]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
