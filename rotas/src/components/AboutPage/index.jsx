import Link from "next/link";
import styles from "./index.module.css";

export default function AboutPage({
  title,
  about,
  link = { href: "", content: "" },
}) {
  return (
    <main className={styles.main}>
      <h1>{title}</h1>
      <p>{about}</p>
      <Link href={link.href} target="_bank">
        {link.content}
      </Link>
    </main>
  );
}
