import { Cairo } from "next/font/google";
import "./globals.css";
import { getLocale } from "next-intl/server";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={`${cairo.className} antialiased`}>{children}</body>
    </html>
  );
}
