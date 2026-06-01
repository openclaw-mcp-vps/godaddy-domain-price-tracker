import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoDaddy Domain Price Tracker – Monitor Prices Anonymously",
  description: "Track GoDaddy domain prices without revealing your searches. Get alerted to price changes before GoDaddy can manipulate them."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6f5f880a-df4c-4ae5-899f-def51f1a19b5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
