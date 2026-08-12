import type { Metadata } from "next";
import { disciplines, siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "关于我 | 小不理",
  description: "关于游戏策划小不理，以及正在学习和实践的方向。",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <span className="page-kicker">INDEX / 03</span>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <h1 className="page-title">
                About<span className="text-[#da5c38]">.</span>
              </h1>
              <p className="mt-5 text-xl font-semibold tracking-[-0.025em] text-[#d4d9d4] sm:text-2xl">
                关于我
              </p>
            </div>
            <p className="font-mono text-[11px] leading-6 tracking-[0.12em] text-[#aeb4af]">
              GAME DESIGN / UNITY / LEARNING
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div>
            <div className="flex aspect-square max-w-[260px] items-end bg-[#94a66c] p-6">
              <div>
                <span className="text-3xl font-semibold tracking-[-0.04em]">
                  {siteInfo.name}
                </span>
                <span className="mt-2 block font-mono text-[10px] tracking-[0.14em]">
                  GAME DESIGNER
                </span>
              </div>
            </div>
          </div>

          <div>
            <span className="section-kicker">PROFILE</span>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.3] tracking-[-0.045em] sm:text-5xl sm:leading-[1.2]">
              游戏策划，持续学习玩法设计、系统设计、关卡设计与游戏开发。
            </h2>
            <div className="mt-10 space-y-5 border-t border-[#191c1b]/15 pt-8 text-base leading-8 text-[#5f6460]">
              {siteInfo.about.map((paragraph) => (
                <p key={paragraph} className="max-w-3xl">
                  {paragraph}
                </p>
              ))}
              <p className="max-w-3xl border-l-2 border-[#94a66c] pl-5 text-sm text-[#686d69]">
                {siteInfo.aiNote}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-[#191c1b]/15 pt-10 sm:mt-28 sm:pt-14">
          <span className="section-kicker">CURRENT FOCUS</span>
          <div className="mt-8 grid gap-px overflow-hidden border border-[#191c1b]/15 bg-[#191c1b]/15 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((discipline) => (
              <div key={discipline.index} className="min-h-44 bg-[#f3f1eb] p-6">
                <span className="font-mono text-[10px] text-[#da5c38]">
                  {discipline.index} / {discipline.english}
                </span>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em]">
                  {discipline.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#686d69]">
                  {discipline.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
