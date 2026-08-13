"use client";

import { useEffect, useState } from "react";

export type TocItem = {
  id: string;
  label: string;
  index: string;
};

function TocLinks({ items, activeId }: { items: TocItem[]; activeId: string }) {
  return (
    <ol className="writing-toc__list">
      {items.map((item) => {
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

export function WritingToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) return;

    let frame = 0;

    const updateActiveSection = () => {
      const marker = Math.min(220, window.innerHeight * 0.28);
      let nextId = items[0].id;

      for (const item of items) {
        const heading = document.getElementById(item.id);
        if (!heading) continue;
        if (heading.getBoundingClientRect().top > marker) break;
        nextId = item.id;
      }

      const pageBottom = window.scrollY + window.innerHeight;
      if (pageBottom >= document.documentElement.scrollHeight - 4) {
        nextId = items.at(-1)!.id;
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
  }, [items]);

  return (
    <>
      <nav className="writing-toc writing-toc--desktop" aria-label="文章目录">
        <p>CONTENTS</p>
        <TocLinks items={items} activeId={activeId} />
      </nav>

      <details className="writing-toc writing-toc--mobile">
        <summary>文章目录 / CONTENTS</summary>
        <TocLinks items={items} activeId={activeId} />
      </details>
    </>
  );
}
