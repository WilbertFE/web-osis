"use client";

import { CarouselDemo } from "./CarouselDemo";
import { GridBackgroundDemo } from "./GridBackgroundDemo";

export default function Features() {
  return (
    <GridBackgroundDemo>
      <div id="features" className="w-full z-[1] flex flex-col px-4">
        <h1 className="text-3xl tracking-wider text-center font-bold">
          Fitur Utama
        </h1>
        <p className="text-sm text-center">beberapa fungsi utama aplikasi</p>
        <CarouselDemo />
      </div>
    </GridBackgroundDemo>
  );
}
