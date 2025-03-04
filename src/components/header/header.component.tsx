"use client";

type menuItems = { id: number; href: string; title: string };

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  const pathname: string = usePathname();

  const menuItems: menuItems[] = [
    { id: 1, href: "", title: "خانه" },
    { id: 2, href: "search", title: "جستجو" },
  ];
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              <Link
                href={`/${menuItem.href}`}
                className={clsx(
                  pathname === `/${menuItem.href}` && styles.active,
                )}
              >
                {menuItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="/auth" className={styles.cta}>
        ورود | ثبت‌نام
      </Link>
    </header>
  );
}
