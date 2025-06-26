/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import Link from "next/link";

export function TracingBeamDemo({ dummyContent }: { dummyContent: any }) {
  const { status } = useSession();

  const handleClick = () => {
    if (status === "unauthenticated") {
      toast("Login terlebih dahulu sebelum mengakses fitur");
    }
  };
  return (
    <TracingBeam className="px-12">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item: any, index: number) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4 font-bold tracking-wider")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-4 object-cover"
                />
              )}
              <p className="mb-2">{item.description}</p>
            </div>
            <Button
              variant="secondary"
              className="font-bold tracking-wider"
              onClick={handleClick}
              asChild
            >
              <Link href={status === "authenticated" ? `${item.href}` : "/"}>
                Coba di sini
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
