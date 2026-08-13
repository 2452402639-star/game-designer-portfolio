import Image from "next/image";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const imageDimensions: Record<string, { width: number; height: number }> = {
  "/writing/stormveil-castle/core-thesis-framework.jpg": { width: 1500, height: 720 },
  "/writing/stormveil-castle/stormveil-entrance.jpg": { width: 819, height: 307 },
  "/writing/stormveil-castle/macro-topology.jpg": { width: 1500, height: 820 },
  "/writing/stormveil-castle/route-weight-model.jpg": { width: 1500, height: 820 },
  "/writing/stormveil-castle/nonlinear-rooftop.jpg": { width: 819, height: 345 },
  "/writing/stormveil-castle/vertical-loop-model.jpg": { width: 1500, height: 610 },
  "/writing/stormveil-castle/banished-knight.jpg": { width: 819, height: 365 },
  "/writing/stormveil-castle/pacing-example.jpg": { width: 819, height: 365 },
  "/writing/stormveil-castle/whitebox-workflow.jpg": { width: 1500, height: 780 },
  "/writing/ugc-industry-observation/ugc-ecosystem-data.jpg": { width: 2089, height: 1229 },
  "/writing/ugc-industry-observation/ugc-growth-flywheel.jpg": { width: 1834, height: 1433 },
  "/writing/ugc-industry-observation/ugc-five-layer-model.jpg": { width: 1919, height: 1263 },
  "/writing/ugc-industry-observation/ugc-officialization-funnel.jpg": { width: 1634, height: 962 },
};

function headingId(children: ReactNode) {
  const text = Array.isArray(children) ? children.join("") : String(children);

  return text
    .toLowerCase()
    .replace(/[·“”《》〈〉，,。？：；、（）()&]/g, "")
    .replace(/[\s/.]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function MarkdownImage({ src, alt }: ComponentPropsWithoutRef<"img">) {
  if (typeof src !== "string") return null;

  const dimensions = imageDimensions[src] ?? { width: 1600, height: 900 };

  return (
    <Image
      src={src}
      alt={alt ?? ""}
      width={dimensions.width}
      height={dimensions.height}
      sizes="(max-width: 1024px) 100vw, 860px"
    />
  );
}

export function MarkdownContent({ children }: { children: string }) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children: headingChildren, ...props }) => {
            delete props.node;

            return (
              <h2 id={headingId(headingChildren)} {...props}>
                {headingChildren}
              </h2>
            );
          },
          h3: ({ children: headingChildren, ...props }) => {
            delete props.node;

            return (
              <h3 id={headingId(headingChildren)} {...props}>
                {headingChildren}
              </h3>
            );
          },
          img: MarkdownImage,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
