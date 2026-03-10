import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Land Vault | Tokenizing Physical Land Assets",
  description: "Land Vault transforms real-world land assets into programmable digital investments — bringing transparency, liquidity, and global access to real estate.",
  keywords: ["RWA", "Real World Assets", "Land Tokenization", "Blockchain", "Real Estate", "Web3"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="glow-blob glow-top-right" />
        <div className="glow-blob glow-bottom-left" />
        {children}
      </body>
    </html>
  );

}
