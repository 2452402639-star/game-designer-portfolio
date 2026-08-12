import Link from "next/link";
import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
  tone?: "dark" | "light";
};

export function ProjectCard({ project, tone = "dark" }: ProjectCardProps) {
  const isDark = tone === "dark";

  return (
    <article id={project.slug} className="project-card group min-w-0 scroll-mt-28">
      <Link
        href={`/projects#${project.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#da5c38]"
        aria-label={`查看项目：${project.title}`}
      >
        <div className={`project-cover ${project.coverClass}`}>
          <span className="project-grid" />
          <span className="project-shape" />
          <div className="absolute inset-x-4 top-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/80">
            <span>{project.contentLabel}</span>
            <span>VIEW ↗</span>
          </div>
        </div>
        <div className="pt-6">
          <p
            className={`font-mono text-[10px] tracking-[0.14em] ${isDark ? "text-[#969c97]" : "text-[#747975]"}`}
          >
            {project.type}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] transition-colors group-hover:text-[#c84f2e]">
            {project.title}
          </h3>
          <p
            className={`mt-3 text-sm leading-7 ${isDark ? "text-[#aeb4af]" : "text-[#626763]"}`}
          >
            {project.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="项目标签">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className={`border px-2.5 py-1 font-mono text-[10px] ${isDark ? "border-[#f3f1eb]/15 text-[#c4c9c5]" : "border-[#191c1b]/15 text-[#5e635f]"}`}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}
