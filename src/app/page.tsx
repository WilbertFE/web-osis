"use client";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import { ThreeDMarqueeDemoSecond } from "./components/ThreeDMarqueeDemoSecond";

export default function Home() {
  return (
    <>
      <ThreeDMarqueeDemoSecond />
      <Features />
      <Testimonial />
    </>
  );
}
