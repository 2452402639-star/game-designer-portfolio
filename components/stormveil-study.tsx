import Image from "next/image";
import Link from "next/link";
import { MarkdownContent } from "@/components/markdown-content";
import { WritingToc, type TocItem } from "@/components/writing-toc";
import type { ContentDocument } from "@/lib/content";

const stormveilToc = [
  { id: "00-core-thesis", label: "核心判断", index: "00" },
  { id: "01-role-in-the-game", label: "关卡定位", index: "01" },
  { id: "02-macro-topology", label: "宏观结构", index: "02" },
  { id: "03-route-weight", label: "路线权重", index: "03" },
  { id: "03-1-soft-guidance", label: "软引导", index: "03.1" },
  { id: "04-nonlinear-but-readable", label: "非线性与初见顺序", index: "04" },
  { id: "05-verticality-loops", label: "垂直空间与回环", index: "05" },
  { id: "06-encounter-design", label: "遭遇设计", index: "06" },
  { id: "07-pacing", label: "节奏设计", index: "07" },
  { id: "08-reward-exploration", label: "奖励与支路", index: "08" },
  { id: "09-trade-offs", label: "设计代价", index: "09" },
  { id: "10-workflow", label: "工作流", index: "10" },
  { id: "11-checklist", label: "评审清单", index: "11" },
  { id: "conclusion", label: "结语", index: "—" },
] satisfies TocItem[];

export function StormveilStudy({ article }: { article: ContentDocument }) {
  const { frontmatter } = article;

  return (
    <main>
      <header className="stormveil-hero">
        <div className="stormveil-hero__inner">
          <Link className="case-back-link" href="/writing">
            ← 返回文章
          </Link>

          <div className="stormveil-hero__heading">
            <p>STORMVEIL CASTLE · LEVEL DESIGN STUDY</p>
            <h1>
              <span className="stormveil-hero__title-line">
                《艾尔登法环》<span className="stormveil-hero__title-place">史东薇尔城</span>
              </span>
              <span className="stormveil-hero__title-line">关卡设计拆解</span>
            </h1>
            <p className="stormveil-hero__subtitle">
              从复杂空间到可控体验：一个关卡策划的结构化分析
            </p>
          </div>

          <dl className="stormveil-hero__meta">
            <div>
              <dt>TYPE</dt>
              <dd>{frontmatter.type}</dd>
            </div>
            <div>
              <dt>CATEGORY</dt>
              <dd>{frontmatter.category}</dd>
            </div>
            <div>
              <dt>TAGS</dt>
              <dd>{frontmatter.tags.join(" · ")}</dd>
            </div>
          </dl>
        </div>

        <figure className="stormveil-hero__image">
          <Image
            src={frontmatter.cover}
            alt="史东薇尔城入口处的城堡仰视画面"
            width={1600}
            height={900}
            sizes="100vw"
            preload
          />
        </figure>
      </header>

      <section className="stormveil-about" aria-labelledby="about-study">
        <div>
          <p className="section-kicker">ABOUT THIS STUDY</p>
          <h2 id="about-study">阅读定位</h2>
          <p>这是对史东薇尔城本身进行关卡设计拆解。</p>
        </div>
        <ol>
          <li>
            <span>01</span>
            为什么史东薇尔路线很多，却很少让初见玩家彻底失去方向？
          </li>
          <li>
            <span>02</span>
            为什么它看起来自由，但玩家的第一遍体验仍然有明显顺序？
          </li>
          <li>
            <span>03</span>
            哪些东西值得复制，哪些复杂度反而不该复制？
          </li>
        </ol>
      </section>

      <div className="stormveil-reading-layout">
        <WritingToc items={stormveilToc} />
        <article className="stormveil-article">
          <MarkdownContent>{article.body}</MarkdownContent>
        </article>
      </div>
    </main>
  );
}
