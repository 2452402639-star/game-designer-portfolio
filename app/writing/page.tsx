import type { Metadata } from "next";
import Link from "next/link";
import { writingCategories, writings } from "@/data/site";

export const metadata: Metadata = {
  title: "文章 | 小不理",
  description: "游戏设计研究、行业观察、玩法分析与关卡拆解文章合集。",
};

export default function WritingPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <span className="page-kicker">INDEX / 02</span>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <h1 className="page-title">
                Writing<span className="text-[#da5c38]">.</span>
              </h1>
              <p className="mt-5 text-xl font-semibold tracking-[-0.025em] text-[#d4d9d4] sm:text-2xl">
                文章
              </p>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#aeb4af]">
              收录游戏设计研究、行业观察、玩法分析与关卡拆解。当前条目正在整理中。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="flex flex-wrap gap-2" aria-label="文章方向">
          {writingCategories.map((category) => (
            <span key={category} className="filter-button cursor-default">
              {category}
            </span>
          ))}
        </div>

        <div className="mt-10 border-t border-[#191c1b]/15 sm:mt-14">
          {writings.map((writing) => (
            <article
              id={writing.slug}
              key={writing.slug}
              className="group relative grid scroll-mt-28 gap-5 border-b border-[#191c1b]/15 py-8 sm:grid-cols-[70px_1fr_auto] sm:items-start sm:gap-8 sm:py-10"
            >
              {writing.href ? (
                <Link
                  href={writing.href}
                  className="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#da5c38]"
                  aria-label={`阅读：${writing.title}`}
                />
              ) : null}
              <span className="font-mono text-xs text-[#da5c38]">
                {writing.index}
              </span>
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[0.12em] text-[#747975]">
                  <span>{writing.contentLabel}</span>
                  <span aria-hidden="true">/</span>
                  <span>{writing.category}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] transition-colors group-hover:text-[#c84f2e] sm:text-3xl">
                  {writing.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#626763]">
                  {writing.description}
                </p>
              </div>
              <span className="w-fit border border-[#191c1b]/15 px-3 py-1.5 font-mono text-[10px] tracking-[0.1em] text-[#686d69]">
                {writing.status}
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
