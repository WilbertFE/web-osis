"use client";
import { AccordionDemo } from "./components/AccordionDemo";
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
      <DraggableCardDemo />
      <Testimonial />
      <AccordionDemo />
    </>
  );
}
