import { HoverEffect } from "@/components/ui/card-hover-effect";

type Projects = {
  title: string;
  description: string;
  link: string;
};

export function CardHoverEffectDemo({ projects }: { projects: Projects[] }) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
