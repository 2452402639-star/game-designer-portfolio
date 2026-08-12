"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, siteInfo } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#191c1b]/10 bg-[#f3f1eb]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#da5c38]"
          aria-label="返回首页"
        >
          <span className="grid size-8 place-items-center bg-[#191c1b] text-[13px] font-bold text-[#f3f1eb] transition-colors group-hover:bg-[#da5c38]">
            {siteInfo.mark}
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.01em] sm:inline sm:text-[15px]">
            {siteInfo.name}
          </span>
        </Link>

        <nav aria-label="主导航" className="flex items-center gap-3 min-[400px]:gap-4 sm:gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                className="nav-link"
                data-active={isActive || undefined}
                aria-current={isActive ? "page" : undefined}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
