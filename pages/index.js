import LatestNews from 'components/latestNews';
import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h2>Accelerate Your Business</h2>

        <div className={styles.scroll}>
          <span>scroll</span>
        </div>
      </section>

      <section className={styles.mission}>
        <div>
          <h2>MISSION</h2>
          <div>
            <p className={styles.title}>ビジネスの成長を加速させる</p>
            <p className={styles.text}>
              革新的なテクノロジーやビジネス戦略を使い
              <br />
              企業ニーズに合わせた最適なソリューションを提案します。
            </p>
            <p className={styles.text}>
              我々の専門知識と豊富な経験を活かし
              <br />
              あなたのビジネスをさらなる成功へと導いてください。
            </p>
          </div>
        </div>
      </section>

      <section className={styles.service}>
        <h2>SERVICE</h2>
        <p>
          Hornet-Consultingではアプリケーションとコンサルティングの
          <br />
          2つのサービスで企業の成長をサポートします。
        </p>

        <div className={styles.images}>
          <div className={styles.application}></div>
          <div className={styles.consulting}></div>
        </div>
      </section>

      <section className={styles.news}>
        <h2>NEWS</h2>

        <LatestNews />
      </section>
    </div>
  )
}
