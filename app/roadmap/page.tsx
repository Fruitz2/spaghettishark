import { getMarkdownContent } from "@/lib/content-loader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function RoadmapPage() {
  const { content } = getMarkdownContent("roadmap.md");

  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      <article className="prose prose-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
