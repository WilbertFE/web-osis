"use client";
import { AccordionDemo } from "./components/AccordionDemo";
import { ComingSoon } from "./components/ComingSoon";
import { DraggableCardDemo } from "./components/DraggableCardDemo";
import Testimonial from "./components/Testimonial";
import { ThreeDMarqueeDemoSecond } from "./components/ThreeDMarqueeDemoSecond";
import { TimelineDemo } from "./components/TimelineDemo";

export default function Home() {
  console.log("oke");
  return (
    <>
      <ThreeDMarqueeDemoSecond />
      <TimelineDemo />
      <ComingSoon />
      <DraggableCardDemo />
      <Testimonial />
      <AccordionDemo />
    </>
  );
}
