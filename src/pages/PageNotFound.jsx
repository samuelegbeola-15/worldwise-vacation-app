import styles from "./PageNotFound.module.css";
import PageNav from "../components/PageNav";

export default function PageNotFound() {
  return (
    <div className={styles.bckground}>
      <PageNav />

      <h1>Page not found 😢</h1>
    </div>
  );
}
