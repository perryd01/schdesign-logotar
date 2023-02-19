import Image from "next/image";
import Link from "next/link";
import { SchdesignMinimal } from "../logos";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="my-8">
      <header className="h-16 bg-white shadow-lg rounded-3xl mx-auto max-w-screen-xl w-full px-8 flex flex-row items-center justify-between">
        <Link href={"/"}>
          <div className="select-none active:bg-gray-300 hover:bg-gray-200 transition duration-200 rounded-full p-2 cursor-pointer">
            <SchdesignMinimal className="text-4xl fill-logotar-primary" />
          </div>
        </Link>
        <FiMenu className="text-4xl block md:hidden" />
        <nav className="hidden md:block">
          <ul className="h-full flex-row gap-4 text-xl flex">
            <Link href={"/"}>főoldal</Link>
            <Link href={"/kereses"}>keresés</Link>
            <Link href={"/kategoriak"}>kategoriák</Link>
            <Link href={"/rolunk"}>rólunk</Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}
