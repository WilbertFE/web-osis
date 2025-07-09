"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { AnimatedTestimonialsDemo } from "./AnimatedTestiomonialsDemo";
import { CardStackDemo } from "./CardStackDemo";
import { Contact } from "./Contact";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-wrap pb-32 px-4">
      <Contact />
      <div className="flex bg-gray-900 p-4 rounded-md flex-col items-center mt-12 w-full gap-y-4">
        <h1 className="text-3xl text-center tracking-wider font-bold">
          CERITA KAMI
        </h1>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/fotbar.jpeg"
            alt="Image"
            className="rounded-md object-cover"
            fill
          />
        </AspectRatio>
        <p className="text-center text-sm text-muted-foreground tracking-wide lowercase font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          modi.
        </p>
      </div>
      <AnimatedTestimonialsDemo />
      <CardStackDemo />
    </div>
  );
}
