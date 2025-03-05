import { ReactElement } from "react";

import Link from "next/link";
import Image from "next/image";

import certificateLogo from "@/assets/logo/certificate.svg";
import enamadLogo from "@/assets/logo/enamad.svg";
import idkLogo from "@/assets/logo/idk.svg";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>چکاپ‌فایند</div>
        <p className={styles.description}>
          بهترین مرجع جستجوی پزشکان سراسر کشور
        </p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href="#">
              <Image src={idkLogo} alt="idk logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={certificateLogo} alt="certificate logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={enamadLogo} alt="enamad logo" />
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href="https://t.me/Codective" target="_blank">
              <MingcuteTelegramFill />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/bijanprogrammer/"
              target="_blank"
            >
              <MingcuteLinkedinFill />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/@BijanProgrammer"
              target="_blank"
            >
              <MingcuteYoutubeFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وبسایت، خدمات و محتوای مربوط به آن متعلق به
        سایت{" "}
        <Link style={{ color: "var(--color-primary)" }} href="/">
          چکاپ‌فایند
        </Link>{" "}
        می باشد.
      </p>
    </footer>
  );
}
