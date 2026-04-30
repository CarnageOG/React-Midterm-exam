import styles from "./page.module.css";

function loading() {
  return <div className={styles.loading_ssr}>გვერდი იტვირთება</div>;
}

export default loading;