"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ComingSoon() {
  const data = [
    {
      title: "DISCUSSION ROOM",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Tempat membuat dikusi sesama pelajar.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline
        data={data}
        heading="Fitur yang Sedang Dikembangkan"
        explanation="beberapa fitur yang mungkin datang"
      />
    </div>
  );
}
