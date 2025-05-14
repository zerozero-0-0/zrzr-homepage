import Link from "next/link";
import styles from "./articles.module.css";
import { getAllArticles } from "@/lib/articles";

// 技術記事一覧ページ
export default function ArticlesPage() {
  const articles = getAllArticles(); // 記事一覧を取得
  return (
    <main className={styles.container}>
      {/* ホームへの戻るリンク */}
      <Link
        href="/"
        style={{
          color: "#1a237e",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: "1rem",
          display: "inline-block",
          marginBottom: 18,
        }}
      >
        &larr; ホームに戻る
      </Link>
      <h1 className={styles.heading}>技術記事一覧</h1>
      {/* 記事リスト */}
      <ul className={styles.list}>
        {articles.map((a: any) => (
          <li key={a.slug} className={styles.listItem}>
            <Link href={`/articles/${a.slug}`} className={styles.link}>
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
