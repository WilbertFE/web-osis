"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "menurut saya OSIS adalah wadah dimana saya bisa belajar mengembangkan keterampilan dan jiwa kepemimpinan, di OSIS saya banyak belajar tentang komunikasi, berpendapat, dan mengambil keputusan",
    name: "XI-1",
    title: "Helend",
  },
  {
    quote:
      "OSIS adalah organisasi resmi bagi para siswa di sekolah untuk belajar bekerjasama,berorganisasi, dan mengembangkan diri.Anggotanya adalah siswa-siswi yang dipilih untuk mewakili teman-temannya, dan mereka bekerja sama menyelenggarakan berbagai kegiatan sekolah, seperti lomba, acara seni, olahraga, upacara, bahkan kegiatan sosial lainnya.",
    name: "XI-1",
    title: "Mazmur",
  },
  {
    quote:
      "Adalah tempat dimana siswa mampu mengasah dan mengembangkan soft skill dan mengembangkan kemampuan kerjasama yang terstruktur dalam kelompok dengan masih memikul beban tanggung jawab.",
    name: "XI-3",
    title: "Jacob",
  },
  {
    quote:
      "tanggapan saya, OSIS adalah tempat bagi para siswa untuk merepresentasikan suara mereka serta mendorong peningkatan perkembangan karakter dan kepimpinan mereka.",
    name: "X-3",
    title: "Queen",
  },
];
