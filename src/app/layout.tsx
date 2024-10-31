import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased flex flex-col overflow-scroll`}>
        <main className="flex flex-col w-full h-full ">
          {children}
        </main>
        <script
          type="text/javascript"
          src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=R7HmZ6LRXneE6N1wRr8PJaqOo18zgyVH"
        />
      </body>
    </html>
  );
}
