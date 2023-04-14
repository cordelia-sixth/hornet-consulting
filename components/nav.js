import Link from "next/link";
import Contact from "./contact"
import styles from "styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
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
            <span>COMPANY</span>
          </Link>
        </li>
      </ul>
      <Contact />
    </nav>
  )
}