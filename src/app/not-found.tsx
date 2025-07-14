import Image from "next/image";

export default function NotFound() {
  // Or a custom loading skeleton component
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <Image src="/logo.png" alt="logo" width={132} height={132} />
      <span>Halaman tidak ditemukan 404</span>
    </div>
  );
}
