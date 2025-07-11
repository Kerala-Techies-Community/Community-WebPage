import { Metadata } from "next";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css'; // Only Bootstrap (from node_modules)
import "../../public/assets/css/style.css"
import "@assets/css/style.css"
import "@assets/vendor/plyr/plyr.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./global.css"
import Header from "@/components/Header";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // customize weights
  display: "swap", // matches your link setup
});
export const metadata: Metadata = {
  title: "Learn Styling with Tailwind CSS",
  description: "A comprehensive guide to mastering Tailwind CSS for modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      

     
       
      </Head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
