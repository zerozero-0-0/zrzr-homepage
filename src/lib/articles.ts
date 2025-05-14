import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

// Markdown本文から先頭の#見出しを抽出する関数
function extractTitle(content: string): string | null {
  // Markdown本文の先頭の# 見出しを抽出
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

// 記事一覧を取得し、slug・タイトル・本文を返す
export async function getAllArticles() {
  const articlesDir = path.join(process.cwd(), "articles"); // 記事ディレクトリのパス
  const files = await fs.readdir(articlesDir); // ディレクトリ内のファイル一覧取得
  return Promise.all(
    files
      .filter((f) => f.endsWith(".md")) // .mdファイルのみ対象
      .map(async (filename) => {
        const filePath = path.join(articlesDir, filename); // 各記事ファイルのパス
        const fileContents = await fs.readFile(filePath, "utf8"); // ファイル内容を文字列で取得
        const { data, content } = matter(fileContents); // frontmatterと本文を分離
        const title = data.title || extractTitle(content) || filename; // タイトルをfrontmatter→見出し→ファイル名の順で決定
        return {
          slug: filename.replace(/\.md$/, ""), // ファイル名から拡張子を除いたslug
          title,
          content,
        };
      })
  );
}

// slugから1件の記事データを取得
export async function getArticleBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "articles", `${slug}.md`); // 対象記事のパス
  const fileContents = await fs.readFile(filePath, "utf8"); // ファイル内容取得
  const { data, content } = matter(fileContents); // frontmatterと本文を分離
  const title = data.title || extractTitle(content) || slug; // タイトル決定
  return {
    slug,
    title,
    content,
  };
}
