import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js</h1>
      <ul>
        <li><a href="/sub">/pages/sub/index.js</a></li>
        <li><a href="/sub/about">/pages/sub/about.js</a></li>
        <li><a href="/sub/1">/pages/sub/1.js</a></li>
        <li><a href="/sub/2">/pages/sub/2.js</a></li>
        <li><a href="/sub/fetch">/pages/sub/fetch.js</a></li>
      </ul>
    </div>
  );
}
