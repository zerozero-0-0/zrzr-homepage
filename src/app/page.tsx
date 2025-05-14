import Link from "next/link";

// ホームページ（トップページ）
export default function Home() {
  return (
    <main
      style={{
        maxWidth: 700,
        margin: "48px auto 0 auto",
        padding: "40px 28px 60px 28px",
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        textAlign: "center",
      }}
    >
      {/* サイトタイトル */}
      <h1 className="heading">My Homepage</h1>
      {/* サイト説明文 */}
      <p style={{ fontSize: "1.06rem", color: "#333", marginBottom: 36 }}>
        個人プロフィールと技術記事をまとめたホームページです。<br />
        プロフィールやスキル、SNSリンク、Markdown形式の記事を掲載しています。
      </p>
      {/* プロフィール・記事一覧へのボタンリンク */}
      <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 32 }}>
        <Link href="/profile" className="buttonLink">プロフィールを見る</Link>
        <Link href="/articles" className="buttonLink secondary">技術記事一覧</Link>
      </div>
      {/* サイトの技術スタック説明 */}
      <div style={{ color: "#888", fontSize: "0.98rem", marginTop: 32 }}>
        <span>このサイトはNext.js＋Markdownで作成されています。</span>
      </div>
    </main>
  );
}
