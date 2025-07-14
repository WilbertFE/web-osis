import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <Image
        src="/logo.png"
        alt="logo"
        width={132}
        height={132}
        className="animate-spin"
      />
      <span>Loading...</span>
    </div>
  );
}
