import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card/Card";
import login from "@/assets/images/login.webp"
import styles from "./page.module.css";

export default function Auth() {
    return (
        <Card>
            <div className={styles.content}>
                <div className={styles.pic}>
                    <Image alt="login" src={login} />
                </div>
                <div className={styles.signinKeys}>
                    <Link href="/auth/sign-in">ورود </Link>
                    <Link href="/auth/sign-up">ثبت نام</Link>
                </div>
            </div>
        </Card>
    );
}
