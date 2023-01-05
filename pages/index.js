import styles from '../styles/Home.module.css'
// import Navbar from '../components/Navbar'//artık layoutu oluştruduk her sayfada görebiliyoruz


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {/* <Navbar /> */}
        <h1 className={styles.title}>Aos Blog App</h1>
      </main>
    </>
  )
}
