"use client";

import { useEffect, useState } from "react";

const tableOfContents = [
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
] as const;

type SectionId = (typeof tableOfContents)[number]["id"];

function TocLinks({ activeId }: { activeId: string }) {
  return (
    <ol className="stormveil-toc__list">
      {tableOfContents.map((item) => {
        const isActive = activeId === item.id;

        return (
          <li key={item.id} data-active={isActive || undefined}>
            <a href={`#${item.id}`} aria-current={isActive ? "location" : undefined}>
              <span>{item.index}</span>
              {item.label}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export function StormveilToc() {
  const [activeId, setActiveId] = useState<SectionId>(tableOfContents[0].id);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const marker = Math.min(220, window.innerHeight * 0.28);
      let nextId: SectionId = tableOfContents[0].id;

      for (const item of tableOfContents) {
        const heading = document.getElementById(item.id);
        if (!heading) continue;
        if (heading.getBoundingClientRect().top > marker) break;
        nextId = item.id;
      }

      const pageBottom = window.scrollY + window.innerHeight;
      if (pageBottom >= document.documentElement.scrollHeight - 4) {
        nextId = tableOfContents.at(-1)!.id;
      }

      setActiveId((currentId) => (currentId === nextId ? currentId : nextId));
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateActiveSection();
      });
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <>
      <nav className="stormveil-toc stormveil-toc--desktop" aria-label="文章目录">
        <p>CONTENTS</p>
        <TocLinks activeId={activeId} />
      </nav>

      <details className="stormveil-toc stormveil-toc--mobile">
        <summary>文章目录 / CONTENTS</summary>
        <TocLinks activeId={activeId} />
      </details>
    </>
  );
}
