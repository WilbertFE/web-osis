"use client";

import { CarouselDemo } from "./CarouselDemo";

export default function Features() {
  return (
    <div id="features" className="w-full flex flex-col pb-32 pt-12 px-4">
      <h1 className="text-3xl tracking-wider text-center font-bold">
        Fitur Utama
      </h1>
      <p className="text-sm text-center">beberapa fungsi utama aplikasi</p>
      <CarouselDemo />
    </div>
  );
}
