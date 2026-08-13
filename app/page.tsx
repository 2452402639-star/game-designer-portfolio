import Link from "next/link";
import { SelectedWorkCard } from "@/components/selected-work-card";
import { disciplines, selectedWorks, writings } from "@/data/site";

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <section className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-[1240px] items-center gap-14 px-5 py-16 sm:min-h-[680px] sm:px-8 sm:py-24 lg:grid-cols-[1.35fr_0.65fr] lg:px-10 lg:py-28">
        <div>
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-[#606561] sm:mb-10 sm:text-xs">
            <span className="size-2 bg-[#da5c38]" />
            PORTFOLIO / 2026
          </div>

          <h1 className="max-w-4xl font-semibold tracking-[-0.065em]">
            <span className="block text-[clamp(4rem,12vw,9rem)] leading-[0.78]">
              Game
            </span>
            <span className="mt-3 block text-[clamp(4rem,12vw,9rem)] leading-[0.78]">
              Designer<span className="text-[#da5c38]">.</span>
            </span>
            <span className="mt-8 block text-2xl tracking-[-0.03em] text-[#3e4441] sm:text-3xl">
              游戏策划｜玩法 · 系统 · 关卡
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#5b605d] sm:mt-9 sm:text-lg">
            通过原型实践、机制设计与游戏拆解，持续验证自己的设计判断。
            <br className="hidden sm:block" />
            关注玩家决策、系统循环、关卡引导与游戏体验。
          </p>

          <div className="mt-9 flex flex-wrap gap-3 sm:mt-11">
            <Link className="button-primary" href="/projects">
              查看作品 <ArrowIcon />
            </Link>
            <Link className="button-secondary" href="/writing">
              阅读文章 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <aside className="hero-console self-end lg:mb-1" aria-label="作品集概览">
          <div className="flex items-center justify-between border-b border-[#d9ddd9]/15 px-5 py-4 font-mono text-[10px] tracking-[0.14em] text-[#b8bfba]">
            <span>DESIGNER.LOG</span>
            <span className="flex items-center gap-2 text-[#dfe4df]">
              <span className="size-1.5 rounded-full bg-[#94a66c]" /> LEARNING
            </span>
          </div>
          <div className="space-y-7 p-5 sm:p-6">
            <div>
              <span className="console-label">CURRENTLY EXPLORING</span>
              <p className="mt-2 text-lg font-medium tracking-tight text-[#f3f1eb]">
                玩法、系统与场景表达
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="console-cell">
                <span className="console-label">CASE STUDIES</span>
                <strong>{String(selectedWorks.length).padStart(2, "0")}</strong>
                <span>正式案例</span>
              </div>
              <div className="console-cell">
                <span className="console-label">DESIGN AREAS</span>
                <strong>03</strong>
                <span>玩法 · 系统 · 关卡</span>
              </div>
            </div>
            <div className="flex items-end gap-1" aria-hidden="true">
              {[34, 56, 42, 75, 61, 88, 68, 100, 78, 62, 48, 70].map(
                (height, index) => (
                  <span
                    key={index}
                    className="flex-1 bg-[#94a66c]/70"
                    style={{ height: `${height * 0.32}px` }}
                  />
                ),
              )}
            </div>
          </div>
        </aside>
      </section>

      <section className="bg-[#191c1b] text-[#f3f1eb]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="section-heading border-[#f3f1eb]/15">
            <div>
              <span className="section-kicker text-[#aeb4af]">01 / SELECTED WORKS</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                精选作品
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-sm leading-7 text-[#aeb4af]">
                三份正式 Case Study，分别呈现原型实践、系统设计与关卡分析。
              </p>
              <Link className="section-more text-[#f3f1eb]" href="/projects">
                查看全部作品 <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-12 lg:mt-16 lg:grid-cols-3 lg:gap-7">
            {selectedWorks.map((work) => (
              <SelectedWorkCard key={`${work.kind}-${work.slug}`} work={work} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="section-heading border-[#191c1b]/15">
          <div>
            <span className="section-kicker">02 / CAPABILITIES</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              我做什么
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#686d69]">
            围绕玩家行为、系统关系和空间体验，将设计判断转化为可验证方案。
          </p>
        </div>

        <div className="mt-12 border-t border-[#191c1b]/15 lg:mt-16">
          {disciplines.map((discipline) => (
            <article
              key={discipline.index}
              className="group grid gap-3 border-b border-[#191c1b]/15 py-7 sm:grid-cols-[56px_1fr_120px] sm:items-center sm:gap-6 sm:py-8 lg:grid-cols-[80px_1fr_180px_1.2fr]"
            >
              <span className="font-mono text-[11px] text-[#8c918d]">
                {discipline.index}
              </span>
              <h3 className="text-2xl font-semibold tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                {discipline.title}
              </h3>
              <span className="hidden font-mono text-[10px] tracking-[0.16em] text-[#8c918d] sm:block">
                {discipline.english}
              </span>
              <p className="max-w-xl text-sm leading-7 text-[#686d69] sm:col-start-2 lg:col-start-auto">
                {discipline.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#191c1b]/10 bg-[#e7e4dc]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="section-heading border-[#191c1b]/15">
            <div>
              <span className="section-kicker">03 / WRITING</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                设计与研究
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#686d69]">
                长期记录游戏设计文章、案例拆解与研究内容。
              </p>
            </div>
            <Link className="section-more" href="/writing">
              浏览全部文章 <ArrowIcon />
            </Link>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[#191c1b]/15 bg-[#191c1b]/15 md:grid-cols-3 lg:mt-16">
            {writings.map((article) => (
              <article
                key={article.title}
                className="article-card relative flex min-h-[340px] flex-col bg-[#e7e4dc] p-6 sm:p-8"
              >
                {article.href ? (
                  <Link
                    href={article.href}
                    className="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#da5c38]"
                    aria-label={`阅读：${article.title}`}
                  />
                ) : null}
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.1em] text-[#777c78]">
                  <span>{article.status}</span>
                  <span>{article.category}</span>
                </div>
                <span className="mt-12 font-mono text-xs text-[#da5c38]">
                  {article.index}
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-[-0.025em] sm:text-2xl">
                  {article.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#686d69]">
                  {article.description}
                </p>
                <span className="mt-auto pt-8 font-mono text-[10px] tracking-[0.12em] text-[#777c78]">
                  {article.href
                    ? article.contentLabel === "ARTICLE"
                      ? "READ ARTICLE ↗"
                      : "READ STUDY ↗"
                    : "COMING SOON"}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <span className="section-kicker">04 / ABOUT</span>
            <div className="mt-8 flex size-28 items-end bg-[#94a66c] p-4 sm:size-36">
              <span className="text-sm font-bold leading-6 tracking-[0.08em] text-[#191c1b]">
                小不理
                <br />
                GAME DESIGN
              </span>
            </div>
          </div>
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.3] tracking-[-0.045em] sm:text-5xl sm:leading-[1.2]">
              通过原型、游玩与拆解验证设计。
            </h2>
            <p className="mt-9 max-w-2xl border-t border-[#191c1b]/15 pt-8 text-sm leading-7 text-[#5f6460]">
              我关注的不只是“一个设计看起来是否合理”，而是它进入游戏之后，玩家是否真的会按照预期行动。
              <br /><br />
              因此我习惯通过原型、实际游玩、拆解与复盘验证设计判断，并持续将这些过程整理成项目与 Case Study。
            </p>
            <p className="mt-5 max-w-2xl font-mono text-[10px] leading-6 tracking-[0.04em] text-[#777c78]">
              目前持续进行 Unity 原型实践，并关注玩法设计、系统设计与关卡设计。
            </p>
            <Link className="section-more mt-8" href="/about">
              了解更多 <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
