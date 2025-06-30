import React from "react";
import { InfiniteMovingCardsDemo } from "@/components/blocks/infinite-moving-cards-demo";
import { GridBackgroundDemo } from "./GridBackgroundDemo";

export default function Testimonial() {
  return (
    <GridBackgroundDemo>
      <div className="flex z-[1] flex-col w-full">
        <h1 className="text-center font-bold text-3xl tracking-wide">
          Kata Mereka
        </h1>
        <span className="text-sm text-center text-foreground-400">
          tentang OSIS
        </span>
        <div className="my-8" />
        <div className="flex justify-center flex-col">
          <InfiniteMovingCardsDemo />
        </div>
      </div>
    </GridBackgroundDemo>
  );
}
