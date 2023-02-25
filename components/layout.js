import Header from "components/header";
import Footer from "components/footer";
import styles from "styles/layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  )
}