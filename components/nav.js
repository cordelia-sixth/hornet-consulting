import Link from "next/link";
import styles from "styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link href="#" className={styles.linkWrapper}>
            <span>MISSION</span>
          </Link>
        </li>
        <li>
        <Link href="#">
            <span>SERVICE</span>
          </Link>
        </li>
        <li>
        <Link href="#">
            <span>NEWS</span>
          </Link>
        </li>
        <li>
        <Link href="#">
            <span>ABOUT</span>
          </Link>
        </li>
        <li>
        <Link href="#">
            <span>CONTACT</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}