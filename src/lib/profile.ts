import fs from "fs/promises";
import path from "path";

// プロフィール情報（profile.json）を非同期で読み込んで返す関数
export async function getProfile() {
  const filePath = path.join(process.cwd(), "profile.json"); // profile.jsonの絶対パス
  const data = await fs.readFile(filePath, "utf8"); // ファイル内容を非同期で取得
  return JSON.parse(data); // JSONとしてパースして返す
}
