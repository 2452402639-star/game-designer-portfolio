import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AutochessStudy } from "@/components/autochess-study";
import { MarkdownContent } from "@/components/markdown-content";
import { StormveilStudy } from "@/components/stormveil-study";
import { getContentBySlug, getContentSlugs } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getContentSlugs("writing").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getContentBySlug("writing", slug);

  if (!article) return {};

  if (slug === "stormveil-castle") {
    return {
      title: "《艾尔登法环》史东薇尔城关卡设计拆解 | 小不理",
      description: article.frontmatter.description,
    };
  }

  if (slug === "autochess-declaration-system") {
    return {
      title: "自走棋赛季机制设计：宣告系统 & 吟游诗人 | 小不理",
      description: article.frontmatter.description,
    };
  }

  return {
    title: `${article.frontmatter.title} | 小不理`,
    description: article.frontmatter.description,
  };
}

export default async function WritingDetailPage({
  params,
}: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const article = getContentBySlug("writing", slug);

  if (!article) notFound();

  if (slug === "stormveil-castle") {
    return <StormveilStudy article={article} />;
  }

  if (slug === "autochess-declaration-system") {
    return <AutochessStudy article={article} />;
  }

  return (
    <main className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <Link className="case-back-link text-[#555a56]" href="/writing">
        ← 返回文章
      </Link>
      <article className="mx-auto mt-14 max-w-3xl">
        <div className="flex flex-wrap gap-3 font-mono text-[10px] tracking-[0.12em] text-[#747975]">
          <span>{article.frontmatter.type}</span>
          <span>/</span>
          <span>{article.frontmatter.category}</span>
        </div>
        <h1 className="mt-7 text-[clamp(2.8rem,8vw,6rem)] font-semibold leading-[1.02] tracking-[-0.06em]">
          {article.frontmatter.title}
        </h1>
        <p className="mt-8 border-b border-[#191c1b]/15 pb-10 text-lg leading-8 text-[#5f6460]">
          {article.frontmatter.description}
        </p>
        <div className="mt-12">
          <MarkdownContent>{article.body}</MarkdownContent>
        </div>
      </article>
    </main>
  );
}
