"use client";

import { ReactElement, FormEvent, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import signUpImage from "@/assets/images/sign-up.webp";
import Card from "@/components/Card/Card";
import { ButtonComponent } from "../button/button.component";
import NormalInputComponent from "../normal-input/normal-input.component";
import PasswordInputComponent from "../password-input/password-input.component";
import { fetchWithToast } from "@/utils/fetch.utils";
import { signupDto } from "@/dto/auth.dto";

import MingcuteIncognitoModeLine from "@/icons/MingcuteIncognitoModeLine";
import MingcuteUser3Line from "@/icons/MingcuteUser3Line";
import MingcuteMailLine from "@/icons/MingcuteMailLine";

import styles from "@/app/auth/components/styles/auth-form.module.css";

export default function SignUpFormComponent(): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const newUser = new FormData(e.currentTarget);

    const dto: signupDto = {
      name: newUser.get("name") as string,
      username: newUser.get("username") as string,
      email: newUser.get("email") as string,
      password: newUser.get("password") as string,
    };

    const response = await fetchWithToast<null>(
      "/api/auth/sign-up",
      {
        method: "POST",
        body: JSON.stringify(dto),
      },
      "ثبت‌نام با موفقیت انجام شد",
    );

    if (response.error) {
      return;
    }
    formRef.current?.reset();
    router.push("/dashboard");
  };

  return (
    <div className={styles["auth-form"]}>
      <Card>
        <div className={styles["card-content"]}>
          <div className={styles.writings}>
            <form ref={formRef} onSubmit={formSubmitHandler}>
              <NormalInputComponent
                label="نام و نام خانوادگی"
                type="text"
                name="name"
                prefixIcon={<MingcuteIncognitoModeLine />}
              />
              <NormalInputComponent
                label="نام کاربری"
                type="text"
                name="username"
                prefixIcon={<MingcuteUser3Line />}
              />
              <NormalInputComponent
                label="ایمیل"
                type="email"
                name="email"
                prefixIcon={<MingcuteMailLine />}
              />
              <PasswordInputComponent
                label="رمز عبور"
                name="password"
                autoComplete="new-password"
              />
              <ButtonComponent variant="primary">ثبت‌نام</ButtonComponent>
            </form>
            <div className={styles["change-form"]}>
              قبلاً ثبت‌نام کردید؟
              {` `}
              <Link href="/auth/sign-in">وارد شوید</Link>.
            </div>
          </div>
          <div className={styles.visuals}>
            <Image src={signUpImage} alt="" width="300" height="300" />
          </div>
        </div>
      </Card>
    </div>
  );
}
