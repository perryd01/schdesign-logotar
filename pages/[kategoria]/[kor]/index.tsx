import ContentLayout from "@/components/layout/ContentLayout";
import { collections } from "@/data/data";
import { slugify } from "@/utils/helpers";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Image from "next/image";

export default function TeamPage({
  team,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentLayout title={team?.name}>
      <section className="flex flex-col md:flex-row">
        <div className="w-full max-w-sm group inline-block select-none overflow-hidden shadow-lg aspect-square rounded-3xl">
          <div className="relative w-full h-full bg-[#ffffff] group-hover:bg-[#f5f5f5] group-active:bg-[#e8e8e8] transition duration-200">
            <Image
              src={team?.preview as string}
              alt="schdesign logo"
              className="object-contain p-4 md:p-12"
              fill
              draggable={false}
              unoptimized
            />
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-3 place-items-center">
            {team?.links.map((link) => (
              <li key={link.name} className="inline-block ">
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </ContentLayout>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const team = collections
    .find(
      (collection) =>
        slugify(collection.name) === slugify(params?.kategoria as string)
    )
    ?.logos.find(
      (logo) => slugify(logo.name) === slugify(params?.kor as string)
    );

  return {
    props: {
      team,
    },
  };
}

export async function getStaticPaths() {
  const paths = collections
    .map((collection) =>
      collection.logos.map(
        (logo) => `/${slugify(collection.name)}/${slugify(logo.name)}`
      )
    )
    .flat();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
