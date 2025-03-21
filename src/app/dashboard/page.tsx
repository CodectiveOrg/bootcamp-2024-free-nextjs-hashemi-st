"use client";

import { ReactElement } from "react";
import { useRouter } from "next/navigation";

import { ButtonComponent } from "../auth/components/button/button.component";
import { fetchWithToast } from "@/utils/fetch.utils";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  const router = useRouter();

  const signOutButtonClickHandler = async (): Promise<void> => {
    const response = await fetchWithToast<null>(
      "/api/auth/sign-out",
      {
        method: "POST",
      },
      "به امید دیدار",
    );

    if (response.error) {
      return;
    }
    router.push("/ ");
  };

  return (
    <div className={styles.page}>
      <h1>داشبورد</h1>
      <ButtonComponent variant="danger" onClick={signOutButtonClickHandler}>
        خروج
      </ButtonComponent>
    </div>
  );
}
