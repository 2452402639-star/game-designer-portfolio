import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import {
  getContentSlugs,
  getMarkdownSections,
  getProjectBySlug,
} from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getContentSlugs("projects").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.frontmatter.title} | 小不理`,
    description: project.frontmatter.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { frontmatter } = project;
  const sections = getMarkdownSections(project.body);
  const overview = sections.get("overview");
  const development = sections.get("design-and-development");
  const reflection = sections.get("reflection");
  const developmentTopics = development
    ? [...development.matchAll(/^###\s+(.+)$/gm)].map((match) => match[1].trim())
    : [];
  const builtGroups = [
    {
      title: "敌人与战斗",
      items: ["敌人生成与状态管理", "Boss", "战斗数据"],
    },
    { title: "关卡循环", items: ["波次与关卡配置"] },
    { title: "局外系统", items: ["装备系统", "仓库系统"] },
    { title: "体验表现", items: ["HUD", "交互系统"] },
  ].map((group) => ({
    ...group,
    items: group.items.filter((item) => frontmatter.implemented.includes(item)),
  }));
  const titleParts = frontmatter.title.split(" ");
  const titleLead = titleParts.shift();
  const titleRest = titleParts.join(" ");

  return (
    <main>
      <section className="case-hero">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <Link className="case-back-link" href="/projects">
            ← 返回作品
          </Link>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">
            <div>
              <span className="page-kicker">PROJECT CASE STUDY / 01</span>
              <h1 className="case-title">
                <span>{titleLead}</span>
                {titleRest && (
                  <span>
                    {titleRest}<span className="text-[#da5c38]">.</span>
                  </span>
                )}
              </h1>
              <p className="mt-7 text-lg font-semibold tracking-[-0.02em] text-[#d2d7d2] sm:text-2xl">
                {frontmatter.type}
              </p>
            </div>

            <dl className="case-meta">
              <div>
                <dt>STATUS</dt>
                <dd>{frontmatter.status}</dd>
              </div>
              <div>
                <dt>TYPE</dt>
                <dd>{frontmatter.category}</dd>
              </div>
              <div>
                <dt>TOOL</dt>
                <dd>{frontmatter.tool}</dd>
              </div>
            </dl>
          </div>

          <ul className="mt-12 flex flex-wrap gap-2" aria-label="项目标签">
            {frontmatter.tags.map((tag) => (
              <li key={tag} className="case-tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="case-cover" aria-label="Godot 游戏项目封面占位">
        <div className="case-cover__grid" />
        <div className="case-cover__mark">GODOT / PROTOTYPE</div>
        <div className="case-cover__shape" aria-hidden="true" />
      </div>

      <section className="case-section">
        <div className="case-section__label">
          <span>01</span>
          <p>OVERVIEW</p>
        </div>
        <div className="case-section__content">
          <h2>项目概述</h2>
          {overview && <MarkdownContent>{overview}</MarkdownContent>}
        </div>
      </section>

      <section className="case-section border-t border-[#191c1b]/15">
        <div className="case-section__label">
          <span>02</span>
          <p>WHAT I BUILT</p>
        </div>
        <div className="case-section__content">
          <h2>已实现内容</h2>
          <div className="built-groups">
            {builtGroups.map((group, groupIndex) => (
              <div key={group.title} className="built-group">
                <div className="built-group__heading">
                  <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section border-t border-[#191c1b]/15">
        <div className="case-section__label">
          <span>03</span>
          <p>DESIGN &amp; DEVELOPMENT</p>
        </div>
        <div className="case-section__content">
          <h2>设计与开发</h2>
          <div className="development-outline">
            <ul aria-label="待整理章节">
              {developmentTopics.map((topic, index) => (
                <li key={topic}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {topic}
                </li>
              ))}
            </ul>
            <div className="content-pending">
              <span className="size-2 bg-[#94a66c]" aria-hidden="true" />
              <p>内容整理中</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#191c1b] text-[#f3f1eb]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="flex flex-col gap-5 border-b border-white/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="page-kicker">04 / GALLERY</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                项目画面
              </h2>
            </div>
            <p className="font-mono text-[10px] tracking-[0.12em] text-[#9da49f]">
              实际素材待补充
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: frontmatter.gallerySlots }, (_, index) => (
              <div key={index} className="gallery-placeholder">
                <span>MEDIA_{String(index + 1).padStart(2, "0")}</span>
                <p>截图 / GIF 占位</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section__label">
          <span>05</span>
          <p>PLAYABLE BUILD</p>
        </div>
        <div className="case-section__content">
          <h2>试玩版本</h2>
          <div className="build-panel">
            <div>
              <span className="section-kicker">PLATFORM</span>
              <p>{frontmatter.build.platform}</p>
            </div>
            {frontmatter.build.url ? (
              <a className="button-primary" href={frontmatter.build.url}>
                试玩版本 ↗
              </a>
            ) : (
              <span className="button-disabled" aria-disabled="true">
                链接整理中
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="case-section border-t border-[#191c1b]/15">
        <div className="case-section__label">
          <span>06</span>
          <p>REFLECTION</p>
        </div>
        <div className="case-section__content">
          <h2>项目总结</h2>
          {reflection && <MarkdownContent>{reflection}</MarkdownContent>}
        </div>
      </section>
    </main>
  );
}
