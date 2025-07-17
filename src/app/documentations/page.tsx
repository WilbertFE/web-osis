import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";

export default function page() {
  const projectsDuaLima = [
    {
      title: "MPLS (DAY ONE)",
      description: "Juli, 2025",
      link: "https://drive.google.com/drive/folders/1u7a0ra-pbMhla6liS-2EzpLLgd7X3XSf",
    },
    {
      title: "UPACARA KEBANGKITAN NASIONAL",
      description: "Mei, 2025",
      link: "https://drive.google.com/drive/folders/1MnRqfMsybX78e-8VLY85nA2mnWeBE97m",
    },
    {
      title: "PROMNIGHT",
      description: "Mei, 2025",
      link: "https://drive.google.com/drive/folders/1Mv-TQdhcSuztKtONrm4iJKlssPcz6bON",
    },
    {
      title: "PAWAI",
      description: "Mei, 2025",
      link: "https://drive.google.com/drive/folders/1lorTjTGDWzC5BzJWvZ6yWleEgtuaLlXe",
    },
    {
      title: "HARDIKNAS 2025",
      description: "Mei, 2025",
      link: "https://drive.google.com/drive/folders/1EOxgOy8Nu-hFf0_WD6CfVHP7_SE6l-0L",
    },
    {
      title: "GRADUATION",
      description: "Mei, 2025",
      link: "https://drive.google.com/drive/folders/1s6Wi7skF78XgX4fRtq2E1GRWwEA0-IvT",
    },
    {
      title: "BPBD",
      description: "Mei, 2025",
      link: "https://drive.google.com/drive/folders/1l8jTq3O8dSa_cRYNElCAO3KlR5gwN50W",
    },
    {
      title: "PASKAH 2025",
      description: "April, 2025",
      link: "https://drive.google.com/drive/folders/1gimEWZW0VvxfRpREqvH_MuTnM2CCmVEw",
    },
    {
      title: "IBADAH PEMBERANGKATAN KELAS 12",
      description: "April, 2025",
      link: "https://drive.google.com/drive/folders/1uKZ6sezrO5Aq_dKhmdv352njwpvqGyk7",
    },
    {
      title: "DESA LINGGA",
      description: "Maret, 2025",
      link: "https://drive.google.com/drive/folders/1DW8xQs-7SQDcLx3gm44g-HyBIcqxP_e7",
    },
    {
      title: "VALENTINE",
      description: "Febuari, 2025",
      link: "https://drive.google.com/drive/folders/1CE0DXtngMAA1koEax3kq92tp_YmlGqPR",
    },
    {
      title: "SEMINAR PAK FIDELIS",
      description: "Febuari, 2025",
      link: "https://drive.google.com/drive/folders/1CBfWXIekBJP_uPM4d7VLGNl10ULNyOyC",
    },
    {
      title: "PARENTING PAK PRAM",
      description: "Febuari, 2025",
      link: "https://drive.google.com/drive/folders/1CKLVRAsZQx0EFpesxneu29OrJCo4Wh89",
    },
    {
      title: "SOSIALISASI IELTS",
      description: "Januari, 2025",
      link: "https://drive.google.com/drive/folders/1B_UIan2vimElPxpSbYrsUfJOzUtTiine",
    },
    {
      title: "RETREAT",
      description: "Januari, 2025",
      link: "https://drive.google.com/drive/folders/1BOU-MSKi798RsbjVkqSuu2VspXkmXGSL",
    },
    {
      title: "KKR",
      description: "Januari, 2025",
      link: "https://drive.google.com/drive/folders/1BccITJIqNe3M6cqU7pRI3861x4Xcqpq2",
    },
  ];
  return (
    <div className="min-h-screen flex pt-28">
      <div className="w-full flex flex-col">
        <h1 className="text-xl font-bold tracking-wider text-center">
          DOKUMENTASI OSIS
        </h1>
        <p className="text-sm text-muted-foreground text-center">
          tekan untuk mengakses link google drive
        </p>
        <h1 className="text-xl font-bold tracking-wider text-center mt-4">
          2025
        </h1>
        <CardHoverEffectDemo projects={projectsDuaLima} />
      </div>
    </div>
  );
}
