"use client";

import { FormEvent, ReactElement, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import signInImage from "@/assets/images/sign-in.webp";

import { ButtonComponent } from "../button/button.component";
import Card from "@/components/Card/Card";
import NormalInputComponent from "../normal-input/normal-input.component";
import PasswordInputComponent from "../password-input/password-input.component";

import MingcuteUser3Line from "@/icons/MingcuteUser3Line";
import { fetchWithToast } from "@/utils/fetch.utils";
import { signInDto } from "@/dto/auth.dto";

import styles from "@/app/auth/components/styles/auth-form.module.css";

export default function SignInFormComponent(): ReactElement {
  const formRef = useRef<HTMLFormElement>(null)

  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const newUser = new FormData(e.currentTarget)

    const dto: signInDto = {
      username: newUser.get("username") as string,
      password: newUser.get("password") as string
    }

    const response = await fetchWithToast<null>("/api/auth/sign-in", {
      method: "POST",
      body: JSON.stringify(dto)
    }, "خوش آمدید!")

    if (response.error) {
      return
    }
    formRef.current?.reset()
  };
  return (
    <div className={styles["auth-form"]}>
      <Card>
        <div className={styles["card-content"]}>
          <div className={styles.writings}>
            <form ref={formRef} onSubmit={formSubmitHandler}>
              <NormalInputComponent
                label="نام کاربری"
                type="text"
                name="username"
                prefixIcon={<MingcuteUser3Line />}
              />
              <PasswordInputComponent
                label="رمز عبور"
                name="password"
                autoComplete="current-password"
              />
              <ButtonComponent variant="primary">ورود</ButtonComponent>
            </form>
            <div className={styles["change-form"]}>
              قبلاً ثبت‌نام نکردید؟
              {` `}
              <Link href="/auth/sign-up">ثبت‌نام کنید</Link>.
            </div>
          </div>
          <div className={styles.visuals}>
            <Image src={signInImage} alt="" />
          </div>
        </div>
      </Card>
    </div>
  );
}
