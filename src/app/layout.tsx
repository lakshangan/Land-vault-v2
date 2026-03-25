import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Land Protocol | Tokenizing Physical Land Assets",
  description: "Land Protocol transforms real-world land assets into programmable digital investments — bringing transparency, liquidity, and global access to real estate.",
  keywords: ["RWA", "Real World Assets", "Land Tokenization", "Blockchain", "Real Estate", "Web3"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="glow-blob glow-top-right" />
        <div className="glow-blob glow-bottom-left" />
        <div className="glow-blob" style={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, var(--blue-glow) 0%, transparent 70%)', width: '800px', height: '800px' }} />
        <div className="glow-blob" style={{ top: '20%', left: '10%', background: 'radial-gradient(circle, var(--purple-glow) 0%, transparent 70%)', opacity: 0.15 }} />
        {children}
      </body>
    </html>
  );


}
