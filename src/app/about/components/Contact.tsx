import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Instagram, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Contact() {
  return (
    <div className="flex flex-col items-center w-full gap-y-4 mt-32">
      <h1 className="text-3xl text-center tracking-wider font-bold">
        TENTANG KAMI
      </h1>
      <p className="text-center text-sm text-muted-foreground tracking-wide lowercase font-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        modi.
      </p>
      <AspectRatio ratio={16 / 9}>
        <Image
          src="/fotbar.jpeg"
          alt="Image"
          className="rounded-md object-cover"
          fill
        />
      </AspectRatio>
      <h2 className="text-xl text-center tracking-wider font-bold">
        Jangkau Kami
      </h2>
      <p className="text-center text-sm text-muted-foreground tracking-wide lowercase font-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        modi.
      </p>
      <div className="flex gap-x-2 items-center w-full justify-between">
        <Link
          href="mailto:methonamosis@gmail.com"
          className="flex flex-col w-1/3 items-center gap-x-2 px-1 rounded-md p-1
           bg-gray-900"
        >
          <Mail size={32} />
          <span className="text-sm font-light tracking-wider">Email</span>
        </Link>
        <Link
          href="https://wa.me/6281265850348?text=Halo%2C%20saya%20ingin%20bertanya."
          className="flex flex-col w-1/3 items-center gap-x-2 px-1 rounded-md p-1
           bg-gray-900"
        >
          <PhoneCall size={32} />
          <span className="text-sm font-light tracking-wider">Whatsapp</span>
        </Link>
        <Link
          href="https://www.instagram.com/osis.sma.methonam/"
          className="flex flex-col w-1/3 items-center gap-x-2 px-1 rounded-md p-1
           bg-gray-900"
        >
          <Instagram size={32} />
          <span className="text-sm font-light tracking-wider">Instagram</span>
        </Link>
      </div>
    </div>
  );
}
