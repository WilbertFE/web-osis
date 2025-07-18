"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bell } from "lucide-react";

export function Notification() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <Bell />
          <span className="absolute top-0 -right-1 flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="z-[9999]">
        <SheetHeader>
          <SheetTitle>Notifikasi</SheetTitle>
          <SheetDescription>
            Info terbaru tentang website ini, update, penguguman, dll.
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="flex flex-col">
          <div className="px-4 py-2">
            <h1 className="font-medium tracking-wide">Website Dibuka</h1>
            <span className="text-sm font-light text-muted-foreground">
              14 Juli 2025
            </span>
            <p className="lowercase font-light">
              Website dipublikasikan dan diumukan. Website masih akan
              dikembangkan.
            </p>
          </div>
          <Separator />
          <div className="px-4 py-2">
            <h1 className="font-medium tracking-wide">
              Halaman Dokumentasi Ditambahkan
            </h1>
            <span className="text-sm font-light text-muted-foreground">
              18 Juli 2025
            </span>
            <p className="lowercase font-light">
              Halaman untuk mengakses link google drive dokumentasi terkhusus
              tahun 2024-2025 dibuat.
            </p>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
