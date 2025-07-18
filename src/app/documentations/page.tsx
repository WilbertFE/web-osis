import { AvatarDemo } from "./components/AvatarDemo";
// import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";

export default function page() {
  // const projectsDuaLima = [
  //   {
  //     title: "MPLS (DAY ONE)",
  //     description: "Juli",
  //     link: "https://drive.google.com/drive/folders/1u7a0ra-pbMhla6liS-2EzpLLgd7X3XSf",
  //   },
  //   {
  //     title: "UPACARA KEBANGKITAN NASIONAL",
  //     description: "Mei",
  //     link: "https://drive.google.com/drive/folders/1MnRqfMsybX78e-8VLY85nA2mnWeBE97m",
  //   },
  //   {
  //     title: "PROMNIGHT",
  //     description: "Mei",
  //     link: "https://drive.google.com/drive/folders/1Mv-TQdhcSuztKtONrm4iJKlssPcz6bON",
  //   },
  //   {
  //     title: "PAWAI",
  //     description: "Mei",
  //     link: "https://drive.google.com/drive/folders/1lorTjTGDWzC5BzJWvZ6yWleEgtuaLlXe",
  //   },
  //   {
  //     title: "HARDIKNA",
  //     description: "Mei",
  //     link: "https://drive.google.com/drive/folders/1EOxgOy8Nu-hFf0_WD6CfVHP7_SE6l-0L",
  //   },
  //   {
  //     title: "GRADUATION",
  //     description: "Mei",
  //     link: "https://drive.google.com/drive/folders/1s6Wi7skF78XgX4fRtq2E1GRWwEA0-IvT",
  //   },
  //   {
  //     title: "BPBD",
  //     description: "Mei",
  //     link: "https://drive.google.com/drive/folders/1l8jTq3O8dSa_cRYNElCAO3KlR5gwN50W",
  //   },
  //   {
  //     title: "PASKAH",
  //     description: "April",
  //     link: "https://drive.google.com/drive/folders/1gimEWZW0VvxfRpREqvH_MuTnM2CCmVEw",
  //   },
  //   {
  //     title: "IBADAH PEMBERANGKATAN KELAS 12",
  //     description: "April",
  //     link: "https://drive.google.com/drive/folders/1uKZ6sezrO5Aq_dKhmdv352njwpvqGyk7",
  //   },
  //   {
  //     title: "DESA LINGGA",
  //     description: "Maret",
  //     link: "https://drive.google.com/drive/folders/1DW8xQs-7SQDcLx3gm44g-HyBIcqxP_e7",
  //   },
  //   {
  //     title: "VALENTINE",
  //     description: "Febuari",
  //     link: "https://drive.google.com/drive/folders/1CE0DXtngMAA1koEax3kq92tp_YmlGqPR",
  //   },
  //   {
  //     title: "SEMINAR PAK FIDELIS",
  //     description: "Febuari",
  //     link: "https://drive.google.com/drive/folders/1CBfWXIekBJP_uPM4d7VLGNl10ULNyOyC",
  //   },
  //   {
  //     title: "PARENTING PAK PRAM",
  //     description: "Febuari",
  //     link: "https://drive.google.com/drive/folders/1CKLVRAsZQx0EFpesxneu29OrJCo4Wh89",
  //   },
  //   {
  //     title: "SOSIALISASI IELTS",
  //     description: "Januari",
  //     link: "https://drive.google.com/drive/folders/1B_UIan2vimElPxpSbYrsUfJOzUtTiine",
  //   },
  //   {
  //     title: "RETREAT",
  //     description: "Januari",
  //     link: "https://drive.google.com/drive/folders/1BOU-MSKi798RsbjVkqSuu2VspXkmXGSL",
  //   },
  //   {
  //     title: "KKR",
  //     description: "Januari",
  //     link: "https://drive.google.com/drive/folders/1BccITJIqNe3M6cqU7pRI3861x4Xcqpq2",
  //   },
  // ];

  // const projectsDuaEmpat = [
  //   {
  //     title: "NATAL SMA 2024",
  //     description: "DESEMBER",
  //     link: "https://drive.google.com/drive/folders/1AohDuB1Onn8HeubNXtGI7MJpqC2PdoPV",
  //   },
  //   {
  //     title: "SELEBRASI",
  //     description: "NOVEMBER",
  //     link: "https://drive.google.com/drive/folders/19k2bqpWDWKf0sTPnhysHkPLokJnX28Iu",
  //   },
  //   {
  //     title: "PERAYAAN HARI GURU SMA",
  //     description: "NOVEMBER",
  //     link: "https://drive.google.com/drive/folders/1AY-wIb18l3OQb3baz6OU5TsCh_tJtFAK",
  //   },
  //   {
  //     title: "P5 KELAS XI",
  //     description: "NOVEMBER",
  //     link: "https://drive.google.com/drive/folders/19_Lg_FyBP9IGsY9YYFpjWguRUM1CPcAq",
  //   },
  //   {
  //     title: "LOMBA HARI GURU",
  //     description: "NOVEMBER",
  //     link: "https://drive.google.com/drive/folders/1AGayI1K4_AEO3oJSYagAMNmUM5ZAy3DU",
  //   },
  //   {
  //     title: "SUMPAH PEMUDA 28 OKTOBER",
  //     description: "OKTOBER",
  //     link: "https://drive.google.com/drive/folders/19FCt3UH5ELB_Tox6N8xx5vXDQ-UiPM-D",
  //   },
  //   {
  //     title: "SUMPAH PEMUDA",
  //     description: "OKTOBER",
  //     link: "https://drive.google.com/drive/folders/196DANw0g9J-v1sBOyI5JB1ntVWfwZNXO",
  //   },
  //   {
  //     title: "PASKIB",
  //     description: "OKTOBER",
  //     link: "https://drive.google.com/drive/folders/19EFo1BaWsg8LiCdQSuF2Wwpgi-GhcJSk",
  //   },
  //   {
  //     title: "LBH",
  //     description: "OKTOBER",
  //     link: "https://drive.google.com/drive/folders/190QekpUj_EcAAzc56hE0uYUKwkgjE7N_",
  //   },
  //   {
  //     title: "FILM DOKUMENTER",
  //     description: "SEPTEMBER",
  //     link: "https://drive.google.com/drive/folders/18TxmCx5hI0hrGfkIg0Ls8aOfmgZ2XbTg",
  //   },
  //   {
  //     title: "TEH PUCUK",
  //     description: "SEPTEMBER",
  //     link: "https://drive.google.com/drive/folders/18oU7dgsLkLhH_fVIYWqeFIzkux-l1eqX",
  //   },
  //   {
  //     title: "SEMINAR POLISI",
  //     description: "SEPTEMBER",
  //     link: "https://drive.google.com/drive/folders/18ixv4qm-4rjgvyvXrZy2tsCcdHCe2xwZ",
  //   },
  //   {
  //     title: "PEMIRA KAMERA",
  //     description: "SEPTEMBER",
  //     link: "https://drive.google.com/drive/folders/1i-jes19zPEC1A4KnYCEdjeeAq4cubljN",
  //   },
  //   {
  //     title: "PEMIRA",
  //     description: "SEPTEMBER",
  //     link: "https://drive.google.com/drive/folders/18UNDoxwlFOiXhFMKesDu5I7rTZjUxkkO",
  //   },
  //   {
  //     title: "P5",
  //     description: "SEPTEMBER",
  //     link: "https://drive.google.com/drive/folders/17y4i0wIlBJyMKVAEafczgIH2rTUYzHW4",
  //   },
  //   {
  //     title: "MARKET DAY",
  //     description: "SEPTEMBER",
  //     link: "https://drive.google.com/drive/folders/185tP6q7c5SqFeMXru2_1iV0NsA6_E3eB",
  //   },
  //   {
  //     title: "IMAT",
  //     description: "SEPTEMBER",
  //     link: "https://drive.google.com/drive/folders/18EO6M01Kf7hlAPDZLw2d_rv3dmgb3W7z",
  //   },
  //   {
  //     title: "SMA HUT RI",
  //     description: "AGUSTUS",
  //     link: "https://drive.google.com/drive/folders/10kEdJTdFjoEuQphZ0mU_iuQgK0q8JihI",
  //   },
  //   {
  //     title: "LOMBA 17 HUT RI",
  //     description: "AGUSTUS",
  //     link: "https://drive.google.com/drive/folders/17-GxTgtbwGYGcser1EPeNUwu2-5wpEk5",
  //   },
  //   {
  //     title: "HUT RI KE-79",
  //     description: "AGUSTUS",
  //     link: "https://drive.google.com/drive/folders/1keGesVN_v5Q4Wlgkd9fizXpKlhwD-0I5",
  //   },
  //   {
  //     title: "BUKU CERPEN 2 AGUSTUS",
  //     description: "AGUSTUS",
  //     link: "https://drive.google.com/drive/folders/16byRfHqqnpcCJSJA0sx-zhkibsZBxj2T",
  //   },
  //   {
  //     title: "MPLS HP",
  //     description: "JULI",
  //     link: "https://drive.google.com/drive/folders/16dBrH4IUf7iMPjPF999_bK6j0jnif9my",
  //   },
  //   {
  //     title: "19 JULI",
  //     description: "JULI",
  //     link: "https://drive.google.com/drive/folders/1EXewUTVpEB7x9hkn_7j_6pK1d4Xz1fFL",
  //   },
  //   {
  //     title: "18 JULI",
  //     description: "JULI",
  //     link: "https://drive.google.com/drive/folders/19NZgWm9GhXua7N910E4HQ2JYskrRbYMZ",
  //   },
  //   {
  //     title: "15 JULI",
  //     description: "JULI",
  //     link: "https://drive.google.com/drive/folders/1hO8Tqlm7YjKO0i2DvJiqrgLnJtAiqA-n",
  //   },
  //   {
  //     title: "20 JULI",
  //     description: "JULI",
  //     link: "https://drive.google.com/drive/folders/10jLRH8nvdgOpjZbNHA5eLIcJMHe9qoPf",
  //   },
  //   {
  //     title: "BPBD",
  //     description: "JUNI",
  //     link: "https://drive.google.com/drive/folders/1T5ofRop0Mf5dEMN5SqQs7sL2G8DaUn-p",
  //   },
  //   {
  //     title: "STUDI TIRU",
  //     description: "MEI",
  //     link: "https://drive.google.com/drive/folders/15WOjJ5SL9EnXNHtFy3SjdrXT4IdZz2Wk",
  //   },
  //   {
  //     title: "HARDIKNAS",
  //     description: "MEI",
  //     link: "https://drive.google.com/drive/folders/15R0BZUbSz0ja5RpFdY8dcf-Y4tieLO-t",
  //   },
  //   {
  //     title: "GEBYAR HARDIKNAS",
  //     description: "MEI",
  //     link: "https://drive.google.com/drive/folders/1rrVcq9n_LT_B0Y7_2WLtG3wAiXsMQMxw",
  //   },
  //   {
  //     title: "UPACARA HARI KARTINI",
  //     description: "APRIL",
  //     link: "https://drive.google.com/drive/folders/154_lbPyqgjM9hKNqK3YYydKPGczXNX08",
  //   },
  //   {
  //     title: "SEMINAR MEMBUAT PORTOFOLIO DIRI",
  //     description: "APRIL",
  //     link: "https://drive.google.com/drive/folders/15FrhVYQ8j5i1Ewc8O0HeO-77pHU2RA5O",
  //   },
  //   {
  //     title: "PROJEK IIS KELAS 10",
  //     description: "APRIL",
  //     link: "https://drive.google.com/drive/folders/14wXB_GTUBIdEKpX5XYh0Rl4cqF3ITfRn",
  //   },
  //   {
  //     title: "PERPISAHAN KELAS 12",
  //     description: "APRIL",
  //     link: "https://drive.google.com/drive/folders/1Cvx2hwHC9Y1FOp2mMSs9IQTV3cDnANWF",
  //   },
  //   {
  //     title: "PERPISAHAN HP",
  //     description: "APRIL",
  //     link: "https://drive.google.com/drive/folders/14oeUWTGGrkjQbgCBCAEBdnRukBgGoILe",
  //   },
  //   {
  //     title: "SMA M6 23-24 FOTO BERSAMA",
  //     description: "MARET",
  //     link: "https://drive.google.com/drive/folders/1HQiFYlyR3s4ZRvuAmcL5q_FvRjKv8HJu",
  //   },
  //   {
  //     title: "RETRET",
  //     description: "MARET",
  //     link: "https://drive.google.com/drive/folders/14gkXttuhj4gx6YROewxz4LafpNd0LEVW",
  //   },
  //   {
  //     title: "MENTARI BANGSA LOMBA",
  //     description: "MARET",
  //     link: "https://drive.google.com/drive/folders/14hF3rRi711qQF6K9A3jp8QDL4XgA22aI",
  //   },
  //   {
  //     title: "LOMBA PASKAH 2",
  //     description: "MARET",
  //     link: "https://drive.google.com/drive/folders/1B_uGMW1kVBHHlem6P8gTkVAwIGZcM0vu",
  //   },
  //   {
  //     title: "LOMBA PASKAH 1",
  //     description: "MARET",
  //     link: "https://drive.google.com/drive/folders/1_ZmGHyUMcRw-bSyLLJjprE85OEbqfMXB",
  //   },
  //   {
  //     title: "VALENTINE (15-16 FEB)",
  //     description: "FEBUARI",
  //     link: "https://drive.google.com/drive/folders/1CJwissIzSeeJYGzr57YJpLIzmpZcmVmn",
  //   },
  //   {
  //     title: "RCW (LOMBA TARI)",
  //     description: "FEBUARI",
  //     link: "https://drive.google.com/drive/folders/1urb-EEvnr8seBfdQGh6tFzgOI6O_tOb-",
  //   },
  //   {
  //     title: "CAP GO MEH 24 FEB 2024",
  //     description: "FEBUARI",
  //     link: "https://drive.google.com/drive/folders/1RCM7igpamSrcB7266hBnRyH1wv6PRzhE",
  //   },
  // ];

  return (
    <div className="min-h-screen flex pt-28">
      <div className="w-full flex flex-col">
        <h1 className="text-xl font-bold tracking-wider text-center">
          DOKUMENTASI OSIS
        </h1>
        <p className="text-sm text-muted-foreground text-center">
          tekan untuk mengakses link google drive
        </p>
        <AvatarDemo />
        {/* <h1 className="text-xl font-bold tracking-wider text-center mt-4">
          2025
        </h1> */}
        {/* <CardHoverEffectDemo projects={projectsDuaLima} /> */}
        {/* <h1 className="text-xl font-bold tracking-wider text-center mt-4">
          2024
        </h1> */}
        {/* <CardHoverEffectDemo projects={projectsDuaEmpat} /> */}
      </div>
    </div>
  );
}
