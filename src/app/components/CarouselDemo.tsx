"use client";

import { Carousel } from "@/components/ui/carousel";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Room Report",
      button: "Laporkan Masalah",
      src: "/fotbar.jpeg",
    },
    {
      title: "Aspiration Space",
      button: "Buat Permintaan",
      src: "/logo.png",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
