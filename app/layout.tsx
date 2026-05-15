import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlagiarismCoach – Avoid Accidental Plagiarism Before Submission",
  description: "Scan your paper for plagiarism issues and get AI-powered rewriting suggestions before you submit. Built for college students and writing centers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="23479e43-3447-4254-8b8e-743da9451b19"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
