import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import Logo from "@/logo/Logo";

import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.home}>
      <h1>
        <Logo />
        چکاپ‌فایند
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <h4 className={styles.title}>آخرین جستجوهای شما</h4>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}
