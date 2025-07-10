"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Helend",
    designation: "Koordinator Bidang Kepemimpinan",
    content: (
      <p>
        menurut saya OSIS adalah wadah dimana{" "}
        <Highlight>
          saya bisa belajar mengembangkan keterampilan dan jiwa kepemimpinan
        </Highlight>
        , di OSIS saya banyak belajar tentang komunikasi, berpendapat, dan
        mengambil keputusan
      </p>
    ),
  },
  {
    id: 1,
    name: "Mazmur Cipta Uli Simanungkalit",
    designation: "Koordinator Bidang Bela Negara",
    content: (
      <p>
        OSIS adalah organisasi resmi bagi para siswa di sekolah untuk{" "}
        <Highlight>
          belajar bekerjasama,berorganisasi, dan mengembangkan diri
        </Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: "Jacob",
    designation: "Wakil Ketua",
    content: (
      <p>
        Adalah tempat dimana siswa mampu mengasah dan{" "}
        <Highlight>mengembangkan soft skill</Highlight>
        dan <Highlight>mengembangkan kemampuan kerjasama</Highlight> yang
        terstruktur dalam kelompok dengan masih memikul beban tanggung jawab.
      </p>
    ),
  },
  {
    id: 3,
    name: "Queen",
    designation: "Anggota Bidang Publikasi & Dokumentasi",
    content: (
      <p>
        tanggapan saya, OSIS adalah tempat bagi para siswa untuk
        <Highlight>
          merepresentasikan suara mereka serta mendorong peningkatan
          perkembangan karakter dan kepimpinan mereka
        </Highlight>
        .
      </p>
    ),
  },
];
