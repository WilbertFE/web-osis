"use client";

import Image from "next/image";
import Link from "next/link";
import { Highlight } from "@/components/ui/hero-highlight";
import { Badge } from "@/components/ui/badge";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FaGithub, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

type Visi = {
  title: string;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | null
    | undefined;
};

export default function Hero() {
  const visi: Visi[] = [
    {
      title: "Solidaritas",
      variant: "default",
    },
    {
      title: "Integritas",
      variant: "destructive",
    },
    {
      title: "Kreatifitas",
      variant: "destructive",
    },
    {
      title: "Akhlak",
      variant: "secondary",
    },
    {
      title: "Teknologi",
      variant: "outline",
    },
  ];

  const words = [
    {
      text: "KONTAK",
    },
    {
      text: "OSIS",
    },
  ];

  return (
    <div className="w-full z-[999] mt-12 flex flex-col min-h-screen rounded-b-md">
      <div className="z-10 -mb-8 h-full flex flex-col justify-center items-center">
        <Highlight className="text-3xl font-bold tracking-wider bg-gradient-to-r from-biruMuda1 to-ungu px-1 rounded-lg">
          SIKAT
        </Highlight>
        <div className="my-2"></div>
        <h2 className="text-xl font-bold">
          Semua Misi, <Highlight>OSIS</Highlight> Siap Beraksi!!
        </h2>
        <div className="my-2"></div>
        <Image
          src="/logo.png"
          priority
          alt="Logo OSIS"
          width={256}
          height={256}
        />
        <div className="my-2"></div>
        <div className="flex gap-x-2 gap-y-3 tracking-wide flex-wrap justify-center">
          {visi.map((item, i) => (
            <Badge variant={item.variant} key={i}>
              {item.title}
            </Badge>
          ))}
        </div>
        <div className="my-2"></div>
        <Link href="/about#contact">
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] cursor-pointer hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-bold transition duration-200 ease-linear">
            <TypewriterEffect words={words} />
          </button>
        </Link>
        <div className="flex gap-x-4 mt-4 sm:justify-center sm:mt-0">
          <Link href="https://www.instagram.com/osis.sma.methonam/">
            <FaInstagram />
          </Link>
          <Link href="https://www.tiktok.com/@osismethonam">
            <FaTiktok />
          </Link>
          <Link href="https://www.youtube.com/channel/UC_hg62CaMpMqtok80nzpeLA">
            <FaYoutube />
          </Link>
          <Link href="https://github.com/WilbertFE">
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}
