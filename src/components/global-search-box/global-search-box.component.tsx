import { ReactElement } from "react";
import Link from "next/link";

import MingcuteSearchLine from "@/icons/MingcuteSearchLine";

import styles from "./global-search-box.module.css";

export default function GlobalSearchBoxComponent(): ReactElement {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <MingcuteSearchLine />
      </div>
      <Link href="/search" style={{ width: "100%"}}>
      <input
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
        style={{ width: "100%"}}
      />
      </Link>
    </div>
  );
}
