import Logo from "components/logo"
import Nav from "components/nav"
import SpNav from "./spNav"
import styles from "styles/header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <div className={styles.pcNav}>
          <Nav />
        </div>
        <div className={styles.spNav}>
          <SpNav />
        </div>
      </div>
    </header>
  )
}