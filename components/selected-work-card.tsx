import Link from "next/link";
import type { SelectedWork } from "@/data/site";

export function SelectedWorkCard({ work }: { work: SelectedWork }) {
  const meta = work.kind === "project" ? work.type : work.category;

  return (
    <article className="selected-work-card group min-w-0">
      <Link
        href={work.href}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#da5c38]"
        aria-label={`查看精选内容：${work.title}`}
      >
        <div className={`project-cover ${work.coverClass}`}>
          <span className="project-grid" />
          <span className="project-shape" />
          <div className="absolute inset-x-4 top-4 flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-white/85">
            <span className="work-type-badge">{work.contentLabel}</span>
            <span>VIEW ↗</span>
          </div>
        </div>
        <div className="pt-5">
          <p className="font-mono text-[10px] tracking-[0.14em] text-[#969c97]">
            {meta}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-[-0.035em] transition-colors group-hover:text-[#df7658] sm:text-2xl">
            {work.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#aeb4af]">
            {work.description}
          </p>
        </div>
      </Link>
    </article>
  );
}
