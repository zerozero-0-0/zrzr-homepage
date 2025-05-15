import { getProfile } from "@/lib/profile";
import Link from "next/link";
import styles from "./profile.module.css";

// プロフィールページ（自己紹介・来歴・スキル・SNS）
export default async function ProfilePage() {
  const profile = await getProfile(); // プロフィール情報を取得
  return (
    <main className={styles.container}>
      {/* ホームへの戻るリンク */}
      <Link href="/" className={styles.backLink}>
        &larr; ホームに戻る
      </Link>
      <h1 className={styles.heading}>プロフィール</h1>
      {/* 自己紹介のみ中央寄せ */}
      <section className={styles.section}>
        <p className={styles.bio}>{profile.bio}</p>
      </section>
      {/* 来歴 */}
      <section className={styles.sectionHistory}>
        <h2 className={styles.sectionTitle}>来歴</h2>
        <ul className={styles.list}>
          {profile.history.map((h: string, i: number) => (
            <li key={i} className={styles.listItem}>
              {h}
            </li>
          ))}
        </ul>
      </section>
      {/* スキル */}
      <section className={styles.sectionSkills}>
        <h2 className={styles.sectionTitle}>スキル</h2>
        <ul className={styles.list}>
          {profile.skills.map((s: string, i: number) => {
            // 「 ... 」で分割
            const [lang, desc] = s.split(/\s*\.\.\.\s*/, 2);
            return (
              <li key={i} className={styles.listItem}>
                <span className={styles.skillLang}>{lang}</span>
                <span className={styles.skillDesc}>
                  {desc ? `：${desc}` : ""}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
      {/* SNSリンク集 */}
      <section className={styles.sectionSNS}>
        <h2 className={styles.sectionTitle}>SNS</h2>
        <ul className={styles.list}>
          {profile.sns.map((sns: any, i: number) => (
            <li key={i} className={styles.listItem}>
              <a
                href={sns.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.snsLink}
              >
                {sns.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
