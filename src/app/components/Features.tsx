"use client";

import { TracingBeamDemo } from "@/components/blocks/tracing-beam-demo";

type Dummy = {
  title: string;
  badge: string;
  image: string;
  description: string;
};

export default function Features() {
  const dummyContent: Dummy[] = [
    {
      title: "Anonymous Report",
      badge: "Integritas",
      image: "/fotbar.jpeg",
      description: "Melaporkan masalah secara anonim maupun langsung.",
    },
    {
      title: "Discussion Forum",
      badge: "Solidaritas",
      image: "/solidaritas.jpeg",
      description: "Memberi ruang untuk pelajar berdiskusi.",
    },
    {
      title: "Aspiration Space",
      badge: "Integritas & Kreatifitas",
      image: "/solidaritas.jpeg",
      description:
        "Ruang untuk memberi aspirasi, permintaan terkait apapun ke OSIS.",
    },
  ];

  return (
    <div id="features" className="w-full flex flex-col pb-32 pt-12 px-4">
      <h1 className="text-3xl tracking-wider font-bold">Fitur Utama</h1>
      <div className="my-4"></div>
      <TracingBeamDemo dummyContent={dummyContent} />
    </div>
  );
}
