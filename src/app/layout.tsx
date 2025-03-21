import type { Metadata } from "next";
import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";
import ToastComponent from "@/components/toast/toast.component";

import "@/styles/typography.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "چکاپ فایند",
  description: "پلتفرم جامع جستجوی دکتر و رزرو نوبت آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <p className="tagline">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
        </p>
        <FooterComponent />
        <ToastComponent />
      </body>
    </html>
  );
}
