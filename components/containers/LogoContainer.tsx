import { slugify } from "@/utils/helpers";
import Link from "next/link";
import Image from "next/image";

type LogoContainerProps = {
  logos: Logo[];
};

export default function LogoContainer({ logos }: LogoContainerProps) {
  return (
    <div className="grid gap-2 md:gap-4 grid-cols-[repeat(auto-fill,minmax(140px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
      {logos.map((logo) => (
        <Link
          key={logo.name}
          href={`/${slugify(logo.collection)}/${slugify(logo.name)}`}
          className="group inline-block select-none overflow-hidden shadow-lg aspect-square rounded-3xl"
        >
          <div className="relative w-full h-full bg-[#ffffff] group-hover:bg-[#f5f5f5] group-active:bg-[#e8e8e8] transition duration-200">
            <Image
              src={logo.preview}
              alt="schdesign logo"
              className="object-contain p-8 sm:p-12 select-none group-hover:scale-110 transition duration-200"
              fill
              draggable={false}
            />
            <div className="absolute bottom-0 w-full py-2 bg-white/20  backdrop-blur-xl transition duration-200">
              <span className="text-center w-full block">{logo.name}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
