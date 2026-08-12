import ReactMarkdown from "react-markdown";

export function MarkdownContent({ children }: { children: string }) {
  return (
    <div className="markdown-content">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}
