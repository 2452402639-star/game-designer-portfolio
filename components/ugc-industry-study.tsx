import Image from "next/image";
import Link from "next/link";
import { MarkdownContent } from "@/components/markdown-content";
import { WritingToc, type TocItem } from "@/components/writing-toc";
import type { ContentDocument } from "@/lib/content";

const ugcToc = [
  { id: "导语-introduction", label: "导语", index: "—" },
  { id: "01-misconception", label: "UGC 的误区", index: "01" },
  { id: "02-content-supply", label: "内容供给", index: "02" },
  { id: "03-long-tail-demand", label: "长尾需求", index: "03" },
  { id: "04-creator-identity", label: "创作者身份", index: "04" },
  { id: "05-live-laboratory", label: "玩法实验室", index: "05" },
  { id: "06-discovery", label: "内容分发", index: "06" },
  { id: "07-creator-economy", label: "创作者经济", index: "07" },
  { id: "08-platform-shift", label: "平台转型", index: "08" },
  { id: "09-risks", label: "生态风险", index: "09" },
  { id: "10-officialization", label: "民图转官图", index: "10" },
  { id: "conclusion", label: "为什么是现在", index: "—" },
  { id: "reference", label: "参考资料", index: "REF" },
] satisfies TocItem[];

export function UgcIndustryStudy({ article }: { article: ContentDocument }) {
  const { frontmatter } = article;

  return (
    <main className="ugc-study">
      <header className="ugc-hero">
        <div className="ugc-hero__grid" aria-hidden="true" />
        <div className="ugc-hero__inner">
          <Link className="case-back-link text-[#555a56]" href="/writing">← 返回文章</Link>
          <div className="ugc-hero__heading">
            <p>INDUSTRY ANALYSIS · UGC ECOSYSTEM</p>
            <h1>
              <span>不是缺地图，而是缺生态：</span>
              <span>为什么大厂开始集体押注 UGC？</span>
            </h1>
            <p className="ugc-hero__subtitle">当官方内容产能触顶，玩家创造力正在成为长线游戏的新基础设施</p>
          </div>

          <dl className="ugc-hero__meta">
            <div><dt>AUTHOR</dt><dd>小不理 OvO</dd></div>
            <div><dt>DATE</dt><dd>2026-07-24</dd></div>
            <div><dt>TYPE</dt><dd>{frontmatter.type}</dd></div>
            <div><dt>CATEGORY</dt><dd>{frontmatter.category}</dd></div>
          </dl>

          <div className="ugc-hero__tags">
            {frontmatter.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>

        <figure className="ugc-hero__figure">
          <Image
            src={frontmatter.cover}
            alt="玩家成为创作者并共同形成平台生态的关系图"
            width={2089}
            height={924}
            sizes="(max-width: 1024px) 100vw, 1160px"
            preload
          />
        </figure>
      </header>

      <div className="ugc-reading-layout">
        <WritingToc items={ugcToc} />
        <article className="ugc-article">
          <MarkdownContent>{article.body}</MarkdownContent>
        </article>
      </div>
    </main>
  );
}
