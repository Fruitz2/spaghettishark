import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TextTrail } from "@/components/TextTrail";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Press Kit | Spaghetti Shark",
  description: "Press materials and brand assets for Spaghetti Shark",
};

function getContent() {
  const filePath = path.join(process.cwd(), "content", "spaghettishark", "press-kit.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);
  return content;
}

export default function PressPage() {
  const content = getContent();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      <article className="prose prose-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
