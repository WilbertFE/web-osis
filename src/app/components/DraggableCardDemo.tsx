"use client";

import React, { useEffect, useState } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { GridBackgroundDemo } from "./GridBackgroundDemo";

export function DraggableCardDemo() {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
  }, []);

  const items = [
    {
      title: "SMAS METHODIST 6 MEDAN",
      image: "https://cdn-sekolah.annibuku.com/69733773/1.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "SMAS METHODIST 6 MEDAN",
      image:
        "https://awsimages.detik.net.id/community/media/visual/2023/11/22/potret-keseruan-siswa-sma-methodist-6-medan-ikut-classy-yamaha-youth-festival-medan-kartika-saridetiksumut_169.jpeg?w=1200",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "SMAS METHODIST 6 MEDAN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbUFx9-LSe7vPFGfN0cBbEdKlWSXzafJLFjw&s",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "SMAS METHODIST 6 MEDAN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJUaj0_Be5nkKfpjSYFg057e_HlT9wPBidw&s",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "SMAS METHODIST 6 MEDAN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TjL9Vy0z6Hba6RGpfYtxoWWNvT2jR3Il2Q&s",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "SMAS METHODIST 6 MEDAN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkrUPSxexxKvr9gdsrYgICfrsvvXYVxLIBw&s",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "SMAS METHODIST 6 MEDAN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOD2rfxHfegnhM_P3LlhgUxdc7CT6Tzre-A&s",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    isLoad && (
      <GridBackgroundDemo>
        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
          <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
            SMAS METHODIST 6 MEDAN
          </p>
          {items.map((item, i) => (
            <DraggableCardBody key={i} className={item.className}>
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-80 w-80 object-cover"
              />
              <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </GridBackgroundDemo>
    )
  );
}
