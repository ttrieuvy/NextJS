import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ul>
          <li>
            <Link href={"/facebook"}>facebook</Link>
          </li>

          <li>
            <a href="/youtube">youtube</a>
          </li>
          <li>
            <a href="">hehe</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
