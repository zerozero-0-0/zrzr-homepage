import Link from "next/link";

// 全ページ共通のヘッダーコンポーネント
export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        background: "#1a237e",
        color: "#fff",
        padding: "18px 0",
        marginBottom: 32,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <nav
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 32px",
        }}
      >
        {/* サイトタイトル（ホームリンク） */}
        <Link
          href="/"
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.3rem",
            textDecoration: "none",
          }}
        >
          My Homepage
        </Link>
        {/* ナビゲーションリンク */}
        <div style={{ display: "flex", gap: 24 }}>
          <Link
            href="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1.05rem",
              fontWeight: 500,
            }}
          >
            ホーム
          </Link>
          <Link
            href="/profile"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1.05rem",
            }}
          >
            プロフィール
          </Link>
          <Link
            href="/articles"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1.05rem",
            }}
          >
            技術記事一覧
          </Link>
        </div>
      </nav>
    </header>
  );
}
