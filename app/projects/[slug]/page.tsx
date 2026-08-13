import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import {
  getContentSlugs,
  getMarkdownSections,
  getProjectBySlug,
} from "@/lib/content";

export const dynamicParams = false;

const gallery = [
  {
    src: "/projects/ai-brush-rush/character-select.png",
    alt: "《爱与刷刷与狗刀特》角色选择界面",
    caption: "角色选择",
    description: "不同角色对应不同战斗定位与专属武器。",
  },
  {
    src: "/projects/ai-brush-rush/battlefield-select.png",
    alt: "《爱与刷刷与狗刀特》战场选择界面",
    caption: "战场选择",
    description: "不同战场规则改变敌人节奏与局内压力。",
  },
  {
    src: "/projects/ai-brush-rush/equipment-select.png",
    alt: "《爱与刷刷与狗刀特》战前装备选择界面",
    caption: "战前装备选择",
    description: "局外保留装备可带入下一局，形成长期成长连接。",
  },
] as const;

function getSubsections(markdown = "") {
  const sections: { title: string; body: string }[] = [];
  const matches = [...markdown.matchAll(/^###\s+(.+)$/gm)];

  matches.forEach((match, index) => {
    const start = (match.index ?? 0) + match[0].length;
    const end = matches[index + 1]?.index ?? markdown.length;
    sections.push({
      title: match[1].trim(),
      body: markdown.slice(start, end).trim(),
    });
  });

  return sections;
}

function getOrderedItems(markdown: string) {
  return [...markdown.matchAll(/^\d+\.\s+(.+)$/gm)].map((match) => match[1].trim());
}

function CaseSection({
  index,
  label,
  title,
  children,
  withBorder = true,
}: {
  index: string;
  label: string;
  title: string;
  children: React.ReactNode;
  withBorder?: boolean;
}) {
  return (
    <section className={`case-section ${withBorder ? "border-t border-[#191c1b]/15" : ""}`}>
      <div className="case-section__label">
        <span>{index}</span>
        <p>{label}</p>
      </div>
      <div className="case-section__content">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

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
  const coreLoop = getSubsections(sections.get("core-loop"));
  const systemDesign = sections.get("system-design");
  const designHighlights = sections.get("design-highlights");
  const iteration = sections.get("iteration");
  const roleAndAi = sections.get("role-ai-workflow");
  const projectStatus = sections.get("project-status");
  const reflection = sections.get("reflection");
  const titleParts =
    frontmatter.title === "爱与刷刷与狗刀特"
      ? ["爱与刷刷与", "狗刀特"]
      : [frontmatter.title];

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
                {titleParts.map((part, index) => (
                  <span key={part}>
                    {part}
                    {index === titleParts.length - 1 && (
                      <span className="text-[#da5c38]">.</span>
                    )}
                  </span>
                ))}
              </h1>
              <p className="mt-6 text-2xl font-semibold tracking-[-0.025em] text-[#f3f1eb] sm:text-3xl">
                AI Brush Rush
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#aeb4af] sm:text-base">
                {frontmatter.description}
              </p>
            </div>

            <dl className="case-meta">
              <div>
                <dt>STATUS</dt>
                <dd>{frontmatter.status}</dd>
              </div>
              <div>
                <dt>TYPE</dt>
                <dd>{frontmatter.type}</dd>
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

      <figure className="case-cover case-cover--image">
        <Image
          src={frontmatter.cover}
          alt="《爱与刷刷与狗刀特》实机战斗画面"
          width={1282}
          height={752}
          priority
          sizes="(max-width: 1240px) calc(100vw - 40px), 1160px"
        />
        <figcaption>实机战斗 / IN-GAME BATTLE</figcaption>
      </figure>

      <CaseSection index="01" label="PROJECT OVERVIEW" title="项目概述" withBorder={false}>
        {overview && <MarkdownContent>{overview}</MarkdownContent>}
      </CaseSection>

      <CaseSection index="02" label="CORE LOOP" title="核心玩法循环">
        <div className="loop-groups">
          {coreLoop.map((loop) => (
            <div key={loop.title} className="loop-group">
              <h3>{loop.title}</h3>
              <ol>
                {getOrderedItems(loop.body).map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                    {index < getOrderedItems(loop.body).length - 1 && (
                      <i aria-hidden="true">→</i>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection index="03" label="SYSTEM DESIGN" title="系统设计">
        {systemDesign && (
          <div className="case-subsections">
            <MarkdownContent>{systemDesign}</MarkdownContent>
          </div>
        )}
      </CaseSection>

      <CaseSection index="04" label="DESIGN HIGHLIGHTS" title="重点设计">
        {designHighlights && (
          <div className="highlight-content">
            <MarkdownContent>{designHighlights}</MarkdownContent>
          </div>
        )}
      </CaseSection>

      <CaseSection index="05" label="ITERATION" title="设计迭代">
        {iteration && (
          <div className="iteration-content">
            <MarkdownContent>{iteration}</MarkdownContent>
          </div>
        )}
      </CaseSection>

      <section className="bg-[#191c1b] text-[#f3f1eb]">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="flex flex-col gap-5 border-b border-white/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="page-kicker">06 / GALLERY</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                项目画面
              </h2>
            </div>
            <p className="font-mono text-[10px] tracking-[0.12em] text-[#9da49f]">
              REAL PROJECT CAPTURES
            </p>
          </div>
          <div className="project-gallery">
            {gallery.map((image) => (
              <figure key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1282}
                  height={752}
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1240px) calc(50vw - 44px), 560px"
                />
                <figcaption>
                  <strong>{image.caption}</strong>
                  <span>{image.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CaseSection index="07" label="PLAYABLE BUILD" title="试玩版本">
        <div className="build-panel">
          <dl className="build-panel__details">
            <div>
              <dt>PLATFORM</dt>
              <dd>{frontmatter.build.platform}</dd>
            </div>
            <div>
              <dt>VERSION</dt>
              <dd>{frontmatter.build.version}</dd>
            </div>
            <div>
              <dt>DOWNLOAD</dt>
              <dd>
                {frontmatter.build.provider} · 提取码：
                <span>{frontmatter.build.extractionCode}</span>
              </dd>
            </div>
          </dl>
          {frontmatter.build.url ? (
            <a
              className="button-primary build-panel__action"
              href={frontmatter.build.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`获取 ${frontmatter.build.version}（新标签页打开）`}
            >
              获取试玩版 ↗
            </a>
          ) : (
            <span className="button-disabled" aria-disabled="true">
              链接整理中
            </span>
          )}
        </div>
      </CaseSection>

      <CaseSection index="08" label="ROLE & AI WORKFLOW" title="个人职责与 AI 协作">
        {roleAndAi && (
          <div className="role-content">
            <MarkdownContent>{roleAndAi}</MarkdownContent>
          </div>
        )}
      </CaseSection>

      <CaseSection index="09" label="PROJECT STATUS" title="项目现状">
        {projectStatus && (
          <div className="status-content">
            <MarkdownContent>{projectStatus}</MarkdownContent>
          </div>
        )}
      </CaseSection>

      <CaseSection index="10" label="REFLECTION" title="项目总结">
        {reflection && <MarkdownContent>{reflection}</MarkdownContent>}
      </CaseSection>
    </main>
  );
}
