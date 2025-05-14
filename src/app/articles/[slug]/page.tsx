import { getArticleBySlug } from "@/lib/articles";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

// 型定義を完全に省略（Next.js 15.xの型エラー回避）
export default async function Page(props: any) {
  const article = await getArticleBySlug(props.params.slug);
  // Markdown本文の先頭の#見出しを除去
  const contentWithoutTitle = article.content.replace(/^#\s+.+\n+/, "");
  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
      <Link
        href="/"
        style={{
          color: "#1a237e",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: "1rem",
        }}
      >
        &larr; ホームに戻る
      </Link>
      <h1>{article.title}</h1>
      <ReactMarkdown>{contentWithoutTitle}</ReactMarkdown>
    </main>
  );
}
