import Link from "next/link";
import styles from "./index.module.css";

export default function HeaderTop() {
  return (
    <header className={styles.header}>
      <nav className={styles.containerLinks}>
        <Link href={"/frontend"}>Front-End</Link>
        <Link href={"/backend"}>Back-End</Link>
        <Link href={"/mobile"}>Mobile</Link>
      </nav>
    </header>
  );
}
