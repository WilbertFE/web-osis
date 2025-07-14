import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                width={32}
                height={32}
                src="/logo.png"
                className="h-8 me-3"
                alt="OSIS Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                OSIS METHONAM
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/WilbertFE/web-osis"
                    className="hover:underline "
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/osis.sma.methonam/"
                    className="hover:underline"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              OSIS METHONAM™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex gap-x-4 mt-4 sm:justify-center sm:mt-0">
            <Link href="https://www.instagram.com/osis.sma.methonam/">
              <FaInstagram />
            </Link>
            <Link href="https://www.tiktok.com/@osismethonam">
              <FaTiktok />
            </Link>
            <Link href="https://www.youtube.com/channel/UC_hg62CaMpMqtok80nzpeLA">
              <FaYoutube />
            </Link>
            <Link href="https://github.com/WilbertFE/web-osis">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
