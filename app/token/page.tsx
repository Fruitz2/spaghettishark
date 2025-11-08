import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Tokenomics | Spaghetti Shark",
  description: "SHARK tokenomics and distribution details",
};

function getContent() {
  const filePath = path.join(process.cwd(), "content", "spaghettishark", "tokenomics.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);
  return content;
}

export default function TokenPage() {
  const content = getContent();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      <article className="prose prose-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
