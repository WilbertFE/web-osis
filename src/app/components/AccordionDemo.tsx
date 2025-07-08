import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GridBackgroundDemo } from "./GridBackgroundDemo";

export function AccordionDemo() {
  return (
    <GridBackgroundDemo>
      <div className="z-[1] w-[250px]">
        <h1 className="text-center font-bold text-3xl tracking-wide">
          Pertanyaan Umum
        </h1>
        <p className="text-sm text-center mb-4 text-foreground-400">
          terkait web ini
        </p>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Apa tujuan web ini?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Web ini dibuat untuk memenuhi salah satu program kerja utama
                dari OSIS.
              </p>
              <p>
                Tujuan web ini adalah untuk membangun relasi, menjadi sarana
                komunikasi, dan supaya dapat lebih dekat dengan teknologi.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Kenapa saya tidak bisa mengakses fitur?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Anda harus login dulu supaya bisa mengakses fitur-fitur
                tertentu.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Bagaimana cara menghubungi pengurus OSIS?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Anda bisa ke halaman contact atau melalui media sosial osis.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Apakah OSIS menerima keluhan atau aspirasi siswa secara online?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Ya, anda bisa memberi keluhan atau aspirasi melalui fitur
                Aspiration Space dan Anonymous Report Room.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Apakah OSIS menerima saran atau ide kegiatan dari siswa?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Ya, anda bisa memberi keluhan atau aspirasi melalui fitur
                Aspiration Space.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </GridBackgroundDemo>
  );
}
