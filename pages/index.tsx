import Head from "next/head";
import styles from "../styles/Home.module.css";
import GoogleLoginButton from "../components/atoms/googleLoginButton";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* TODO : ヘッダー情報修正 */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ショートカットマスター</h1>

        <div className={styles.loginContainer}>
          <h3>はじめての方</h3>
          <GoogleLoginButton />
          <h3>それ以外の方</h3>
        </div>
      </main>
    </div>
  );
}
