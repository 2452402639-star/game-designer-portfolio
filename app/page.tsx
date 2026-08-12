const projects = [
  {
    index: "01",
    title: "回声协议",
    type: "叙事解谜 · 独立游戏概念",
    description:
      "围绕“声音回溯”核心机制展开，在有限信息中重建一段失落的太空事故。",
    tags: ["玩法设计", "叙事设计", "原型"],
    coverClass: "project-cover--echo",
  },
  {
    index: "02",
    title: "浮岛调度局",
    type: "模拟经营 · 系统设计",
    description:
      "通过航线、资源与居民需求的相互作用，构建小而有深度的空岛经营循环。",
    tags: ["系统设计", "数值平衡", "UX"],
    coverClass: "project-cover--island",
  },
  {
    index: "03",
    title: "第七码头",
    type: "潜行冒险 · 关卡练习",
    description:
      "以空间信息差驱动潜行决策，探索一座会随警戒等级改变路线的夜间码头。",
    tags: ["关卡设计", "玩家引导", "灰盒"],
    coverClass: "project-cover--dock",
  },
];

const disciplines = [
  {
    index: "01",
    title: "玩法设计",
    english: "GAMEPLAY",
    description: "从核心动词出发，建立清晰、有反馈且可持续拓展的玩法循环。",
  },
  {
    index: "02",
    title: "系统设计",
    english: "SYSTEMS",
    description: "梳理资源、规则与目标之间的关系，让复杂系统保持可读与可控。",
  },
  {
    index: "03",
    title: "关卡设计",
    english: "LEVELS",
    description: "通过空间、节奏和遭遇组织，引导玩家学习、决策并获得掌控感。",
  },
  {
    index: "04",
    title: "游戏分析",
    english: "ANALYSIS",
    description: "拆解成熟作品的体验结构，把感受转化为可复用的设计洞察。",
  },
];

const articles = [
  {
    date: "2026.08.08",
    category: "设计笔记",
    title: "如何用三层反馈，让核心循环更有手感？",
    excerpt: "从即时反馈、短期目标到长期成长，拆解反馈如何支撑玩家动机。",
  },
  {
    date: "2026.07.21",
    category: "游戏分析",
    title: "《潜水员戴夫》的节奏为什么让人停不下来",
    excerpt: "观察昼夜循环、内容解锁与经营环节如何共同形成张弛有度的体验。",
  },
  {
    date: "2026.06.30",
    category: "关卡设计",
    title: "不使用文字，怎样教会玩家一条新规则？",
    excerpt: "从视线、构图与安全试错区出发，整理环境教学的基本方法。",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f1eb] text-[#191c1b]">
      <header className="sticky top-0 z-50 border-b border-[#191c1b]/10 bg-[#f3f1eb]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:px-10">
          <a
            href="#top"
            className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#da5c38]"
            aria-label="返回首页顶部"
          >
            <span className="grid size-8 place-items-center bg-[#191c1b] font-mono text-[11px] font-bold text-[#f3f1eb] transition-colors group-hover:bg-[#da5c38]">
              GD
            </span>
            <span className="text-sm font-semibold tracking-[-0.01em] sm:text-[15px]">
              YOUR NAME
            </span>
          </a>

          <nav aria-label="主导航" className="flex items-center gap-5 sm:gap-8">
            <a className="nav-link" href="#projects">
              作品
            </a>
            <a className="nav-link" href="#articles">
              博客
            </a>
            <a className="nav-link" href="#about">
              关于我
            </a>
          </nav>
        </div>
      </header>

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
                游戏策划
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#5b605d] sm:mt-9 sm:text-lg">
              关注玩法设计、系统设计、关卡设计与游戏体验。
              <br className="hidden sm:block" />
              用规则、空间与反馈，创造值得记住的游玩时刻。
            </p>

            <div className="mt-9 flex flex-wrap gap-3 sm:mt-11">
              <a className="button-primary" href="#projects">
                查看作品 <ArrowIcon />
              </a>
              <a className="button-secondary" href="#articles">
                阅读博客 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <aside className="hero-console self-end lg:mb-1" aria-label="个人状态">
            <div className="flex items-center justify-between border-b border-[#d9ddd9]/15 px-5 py-4 font-mono text-[10px] tracking-[0.14em] text-[#b8bfba]">
              <span>DESIGNER.LOG</span>
              <span className="flex items-center gap-2 text-[#dfe4df]">
                <span className="size-1.5 rounded-full bg-[#94a66c]" /> AVAILABLE
              </span>
            </div>
            <div className="space-y-7 p-5 sm:p-6">
              <div>
                <span className="console-label">CURRENTLY EXPLORING</span>
                <p className="mt-2 text-lg font-medium tracking-tight text-[#f3f1eb]">
                  玩家决策与涌现叙事
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="console-cell">
                  <span className="console-label">FOCUS</span>
                  <strong>04</strong>
                  <span>设计方向</span>
                </div>
                <div className="console-cell">
                  <span className="console-label">PROJECTS</span>
                  <strong>03</strong>
                  <span>精选案例</span>
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

        <section id="projects" className="scroll-mt-20 bg-[#191c1b] text-[#f3f1eb]">
          <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
            <div className="section-heading border-[#f3f1eb]/15">
              <div>
                <span className="section-kicker text-[#aeb4af]">01 / SELECTED WORK</span>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  精选项目
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-[#aeb4af]">
                从概念、原型到设计复盘，记录我如何发现问题、验证想法并持续迭代。
              </p>
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-5 lg:mt-16 lg:gap-7">
              {projects.map((project) => (
                <article key={project.index} className="project-card group">
                  <div className={`project-cover ${project.coverClass}`}>
                    <span className="project-grid" />
                    <span className="project-shape" />
                    <div className="absolute inset-x-4 top-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/75">
                      <span>CASE_{project.index}</span>
                      <span>VIEW ↗</span>
                    </div>
                  </div>
                  <div className="pt-6">
                    <p className="font-mono text-[10px] tracking-[0.14em] text-[#969c97]">
                      {project.type}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] transition-colors group-hover:text-[#df7658]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#aeb4af]">
                      {project.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="项目标签">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-[#f3f1eb]/15 px-2.5 py-1 font-mono text-[10px] text-[#c4c9c5]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
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
              在体验目标与制作约束之间，寻找清晰、可验证的设计解法。
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

        <section id="articles" className="scroll-mt-20 border-y border-[#191c1b]/10 bg-[#e7e4dc]">
          <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
            <div className="section-heading border-[#191c1b]/15">
              <div>
                <span className="section-kicker">03 / LATEST NOTES</span>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  最新文章
                </h2>
              </div>
              <span className="font-mono text-[11px] tracking-[0.12em] text-[#777c78]">
                持续记录，持续校准。
              </span>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden border border-[#191c1b]/15 bg-[#191c1b]/15 md:grid-cols-3 lg:mt-16">
              {articles.map((article, index) => (
                <article
                  key={article.title}
                  className="article-card group flex min-h-[340px] flex-col bg-[#e7e4dc] p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.1em] text-[#777c78]">
                    <span>{article.date}</span>
                    <span>{article.category}</span>
                  </div>
                  <span className="mt-12 font-mono text-xs text-[#da5c38]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold leading-snug tracking-[-0.025em] sm:text-2xl">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#686d69]">
                    {article.excerpt}
                  </p>
                  <span className="mt-auto pt-8 text-xl transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <span className="section-kicker">04 / ABOUT</span>
              <div className="mt-8 flex size-28 items-end bg-[#94a66c] p-4 sm:size-36">
                <span className="font-mono text-xs font-bold tracking-[0.14em] text-[#191c1b]">
                  YOUR
                  <br />
                  PHOTO
                </span>
              </div>
            </div>
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.3] tracking-[-0.045em] sm:text-5xl sm:leading-[1.2]">
                我相信好的设计，始于对玩家行为的好奇，也成于一次次清晰的验证。
              </h2>
              <div className="mt-9 grid gap-6 border-t border-[#191c1b]/15 pt-8 text-sm leading-7 text-[#5f6460] sm:grid-cols-2 sm:gap-10">
                <p>
                  你好，我是一名游戏策划，关注规则如何塑造选择、空间如何传递信息，以及细小反馈如何累积成完整体验。
                </p>
                <p>
                  这个网站收录我的项目、设计思考与原型实验。期待与重视体验、愿意深入讨论设计的团队一起工作。
                </p>
              </div>
              <a
                href="mailto:hello@example.com"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#191c1b] pb-1 text-sm font-semibold transition-colors hover:border-[#da5c38] hover:text-[#da5c38]"
              >
                hello@example.com <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#191c1b] text-[#f3f1eb]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-8 place-items-center bg-[#f3f1eb] font-mono text-[11px] font-bold text-[#191c1b]">
                GD
              </span>
              <span className="text-sm font-semibold">YOUR NAME</span>
            </div>
            <p className="mt-4 text-xs text-[#8f9691]">
              Game Design Portfolio · 2026
            </p>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] tracking-[0.08em] text-[#b7bdb8]">
            <a className="transition-colors hover:text-white" href="#projects">
              WORK
            </a>
            <a className="transition-colors hover:text-white" href="#articles">
              NOTES
            </a>
            <a className="transition-colors hover:text-white" href="#top">
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
