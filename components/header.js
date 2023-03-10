import Logo from "components/logo"
import Nav from "components/nav"
import styles from "styles/header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Nav />
      </div>
    </header>
  )
}