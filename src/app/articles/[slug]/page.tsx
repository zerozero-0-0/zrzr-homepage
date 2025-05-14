import { getArticleBySlug } from "@/lib/articles";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

// 記事詳細ページ
export default function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug); // slugから記事データ取得
  // Markdown本文の先頭の#見出しを除去
  const contentWithoutTitle = article.content.replace(/^#\s+.+\n+/, "");
  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
      {/* ホームへの戻るリンク */}
      <Link href="/" style={{ color: "#1a237e", textDecoration: "none", fontWeight: 500, fontSize: "1rem" }}>&larr; ホームに戻る</Link>
      <h1>{article.title}</h1>
      {/* Markdown本文をHTML表示（見出し重複防止） */}
      <ReactMarkdown>{contentWithoutTitle}</ReactMarkdown>
    </main>
  );
}
