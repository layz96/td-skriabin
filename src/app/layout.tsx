import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ТД Скрябин — Премиальные фасадные материалы | Кирпич, брусчатка, плитка",
  description:
    "Торговый дом Скрябин — облицовочный кирпич, клинкерная брусчатка, фасадная плитка и черепица от ведущих производителей. Доставка по Москве и России. Бесплатная консультация.",
  keywords: "кирпич облицовочный, клинкерный кирпич, брусчатка клинкерная, фасадная плитка, черепица, купить кирпич москва",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
