import type { Metadata } from "next";
import { ProjectList } from "@/components/project-list";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "作品 | 小不理",
  description: "小不理的个人游戏项目、Demo 与游戏原型。",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <span className="page-kicker">INDEX / 01</span>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <h1 className="page-title">
                Projects<span className="text-[#da5c38]">.</span>
              </h1>
              <p className="mt-5 text-xl font-semibold tracking-[-0.025em] text-[#d4d9d4] sm:text-2xl">
                作品
              </p>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#aeb4af]">
              这里只收录真正做过的个人项目、Demo 与游戏原型。内容将随实践持续补充。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
