import manifest from "@/package.json";
import { Schdesign } from "@/components/logos";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 w-full mx-auto py-8 text-white">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-4 px-4">
          <Link href={"https://schdesign.hu"}>
            <Schdesign
              variant="white"
              props={{
                width: "100%",
                height: "100%",
              }}
            />
          </Link>
          <div className="md:col-span-3">
            <Link
              href={manifest.repository.url}
              target="_blank"
              title="Schdesign Logótár Github repository"
            >{`v${manifest.version}`}</Link>
            <Link href={manifest.homepage}>{manifest.homepage}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
