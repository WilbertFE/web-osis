"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useEffect, useState } from "react";

export function AnimatedTestimonialsDemo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Wilbert Bernardi",
      designation: "Ketua",
      src: "/person/wilbert.png",
    },
    {
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jacob Martua Haganta Simorangkir",
      designation: "Wakil Ketua",
      src: "/person/jacob.jpeg",
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      name: "Tia Aprilia Br. Sitompul",
      designation: "Sekretaris",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      name: "Nesya Uli Dayana Cessilia Gultom",
      designation: "Wakil Sekretaris",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Excepteur sint occaecat cupidatat non proident.",
      name: "Olivia Sitanggang",
      designation: "Bendahara",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "David Bonaventura Situmorang",
      designation: "Wakil Bendahara",
      src: "https://github.com/shadcn.png",
    },

    // MAJELIS PERWAKILAN KELAS
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Aurel Situmorang",
      designation: "Koordinator Majelis Perwakilan Kelas",
      src: "https://github.com/shadcn.png",
    },
    {
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Tamariska Lolyta Manurung",
      designation: "Anggota Majelis Perwakilan Kelas",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      name: "Andre Christopher Sirait",
      designation: "Anggota Majelis Perwakilan Kelas",
      src: "https://github.com/shadcn.png",
    },

    // BIDANG KEIMANAN & KETAQWAAN
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      name: "Kezia Laura Siregar",
      designation: "Koordinator Bidang Keimanan & Ketaqwaan",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Excepteur sint occaecat cupidatat non proident.",
      name: "Christoper Daud Siregar",
      designation: "Anggota Bidang Keimanan & Ketaqwaan",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Avril Nibenia Baringinuli Siahaan",
      designation: "Anggota Bidang Keimanan & Ketaqwaan",
      src: "https://github.com/shadcn.png",
    },

    // BIDANG BELA NEGARA
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Mazmur Cipta Uli Simanungkalit",
      designation: "Koordinator Bidang Bela Negara",
      src: "https://github.com/shadcn.png",
    },
    {
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Singkop Jelinda Noviandri Ruth Hutagalung",
      designation: "Anggota Bidang Bela Negara",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      name: "Garry Sebastian Surbakti",
      designation: "Anggota Bidang Bela Negara",
      src: "https://github.com/shadcn.png",
    },

    // BIDANG BUDI PEKERTI
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      name: "Chelsy Lamtiur Br. Hombing",
      designation: "Koordinator Bidang Budi Pekerti",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Excepteur sint occaecat cupidatat non proident.",
      name: "Jhonny Hutabarat",
      designation: "Anggota Bidang Budi Pekerti",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Sri Agita Silalahi",
      designation: "Anggota Bidang Budi Pekerti",
      src: "https://github.com/shadcn.png",
    },

    // BIDANG PENDIDIKAN
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Hasian Gebriel G Tambunan",
      designation: "Koordinator Bidang Pendidikan",
      src: "https://github.com/shadcn.png",
    },
    {
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Anggi Patrecia Tambunan",
      designation: "Anggota Bidang Pendidikan",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      name: "Claudia Yossi Napitu",
      designation: "Anggota Bidang Pendidikan",
      src: "https://github.com/shadcn.png",
    },

    // BIDANG KEWIRAUSAHAAN
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      name: "Gadael Gabe Parulian",
      designation: "Koordinator Bidang Kewirausahaan",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Excepteur sint occaecat cupidatat non proident.",
      name: "Jessy Angelia Cristy Br. Panjaitan",
      designation: "Anggota Bidang Kewirausahaan",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Varrentiono Exchell Lim",
      designation: "Anggota Bidang Kewirausahaan",
      src: "https://github.com/shadcn.png",
    },

    // BIDANG SENI & OLAHRAGA
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Dian Arisnov L Sirait",
      designation: "Koordinator Bidang Seni & Olahraga",
      src: "https://github.com/shadcn.png",
    },
    {
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Andre Jonathan Panjaitan",
      designation: "Anggota Bidang Seni & Olahraga",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      name: "Steven Agustino",
      designation: "Anggota Bidang Seni & Olahraga",
      src: "https://github.com/shadcn.png",
    },

    // BIDANG KEPEMIMPINAN
    {
      quote: "Excepteur sint occaecat cupidatat non proident.",
      name: "Lidia Helend",
      designation: "Koordinator Bidang Kepemimpinan",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      name: "Luat Samuel Sinaga",
      designation: "Anggota Bidang Kepemimpinan",
      src: "https://github.com/shadcn.png",
    },

    {
      quote: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Andreas Timothy Purba",
      designation: "Anggota Bidang Kepemimpinan",
      src: "https://github.com/shadcn.png",
    },

    // BIDANG PUBLIKASI & DOKUMENTASI
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Purna Sarawanan",
      designation: "Koordinator Bidang Publikasi & Dokumentasi",
      src: "https://github.com/shadcn.png",
    },
    {
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Adelyne Julieta",
      designation: "Anggota Bidang Publikasi & Dokumentasi",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      name: "Jeremi Surya Pratama Sinaga",
      designation: "Anggota Bidang Publikasi & Dokumentasi",
      src: "https://github.com/shadcn.png",
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      name: "Queen Celine Carenina",
      designation: "Anggota Bidang Publikasi & Dokumentasi",
      src: "https://github.com/shadcn.png",
    },
  ];

  return (
    <div className="pt-12">
      <h1 className="text-xl text-center tracking-wider font-bold">Anggota</h1>
      <AnimatedTestimonials autoplay testimonials={testimonials} />
    </div>
  );
}
