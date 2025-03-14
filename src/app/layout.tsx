import Footer from "@/components/Footer/Footer";
import Cursor from "@/components/Layout/Cursor";
import Links from "@/components/Layout/Links";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "@/providers/Providers";
import { Quicksand } from "next/font/google";
import "../styles/GlobalStyles.scss";
import styles from "../styles/Layout/MainLayout.module.scss";
const quicksand = Quicksand({ subsets: ["latin"] });
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content="Portfolio Website" />
        <title>Rachana Angara</title>
      </head>
      <body className={quicksand.className}>
        <main className={styles.layout}>
          <Providers>
              <Analytics />
            <Navbar />
            <Links />
            {children}
            <Cursor />
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
