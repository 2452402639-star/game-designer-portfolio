import { ProjectCard } from "@/components/project-card";
import { projectPlaceholders, type Project } from "@/data/site";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-x-7 md:gap-y-14 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} tone="light" />
      ))}

      {projectPlaceholders.map((placeholder) => (
        <div key={placeholder.index} className="project-placeholder">
          <div>
            <span className="font-mono text-[10px] tracking-[0.14em] text-[#8b908c]">
              SLOT_{placeholder.index}
            </span>
            <p className="mt-3 font-mono text-xs tracking-[0.14em] text-[#5f6460]">
              {placeholder.label}
            </p>
          </div>
          <span className="font-mono text-4xl font-medium text-[#191c1b]/15">
            +
          </span>
        </div>
      ))}
    </div>
  );
}
