
import { Metadata } from "next";
import "./globals.css";
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
      <body className={`bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
