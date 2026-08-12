import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game Designer Portfolio | 游戏策划作品集",
  description:
    "专注玩法设计、系统设计、关卡设计与游戏体验的游戏策划个人作品集。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
