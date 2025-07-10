"use client";

import { AnimatedTestimonialsDemo } from "./AnimatedTestiomonialsDemo";
import { CardStackDemo } from "./CardStackDemo";
import { Contact } from "./Contact";

export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-wrap pb-32 px-4">
      <Contact />
      <AnimatedTestimonialsDemo />
      <CardStackDemo />
    </div>
  );
}
