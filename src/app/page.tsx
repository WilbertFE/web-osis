"use client";
import CountUsers from "./components/CountUsers";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <CountUsers />
      <Testimonial />
    </>
  );
}
