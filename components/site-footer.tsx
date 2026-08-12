import Link from "next/link";
import { navigation, siteInfo } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#191c1b] text-[#f3f1eb]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-10">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-8 place-items-center bg-[#f3f1eb] text-[13px] font-bold text-[#191c1b]">
              {siteInfo.mark}
            </span>
            <span className="text-sm font-semibold">{siteInfo.name}</span>
          </Link>
          <p className="mt-4 text-xs text-[#8f9691]">
            Game Design Portfolio · 2026
          </p>
        </div>
        <nav
          aria-label="页脚导航"
          className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] tracking-[0.08em] text-[#b7bdb8]"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              className="transition-colors hover:text-white"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
