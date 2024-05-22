import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forms and Actions Practice",
  description:
    "It is the project for practicing Forms Actions and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className=" w-full h-screen bg-gray-100 flex justify-center items-center font-sans text-gray-600">
        {children}
      </body>
    </html>
  );
}
