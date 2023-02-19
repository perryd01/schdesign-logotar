import ContentLayout from "@/components/layout/ContentLayout";
import { collections } from "@/data/data";
import { slugify } from "@/utils/helpers";
import {
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import Image from "next/image";

export default function CategoryPage({
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentLayout title={category?.name}>
      <div
        className="grid gap-8"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        }}
      >
        {category?.logos.map((logo) => (
          <Link
            key={logo.name}
            href={`/${slugify(category.name)}/${slugify(logo.name)}`}
            className="group inline-block select-none overflow-hidden shadow-lg aspect-square rounded-3xl"
          >
            <div className="relative w-full h-full bg-[#ffffff] group-hover:bg-[#f5f5f5] group-active:bg-[#e8e8e8] transition duration-200">
              <Image
                src={logo.preview}
                alt="schdesign logo"
                className="object-contain p-12"
                fill
                draggable={false}
                unoptimized
              />
              <div className="absolute bottom-0 w-full py-2 bg-white/20  backdrop-blur-xl transition duration-200">
                <span className="text-center w-full block">{logo.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </ContentLayout>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const category = collections.find(
    (collection) =>
      slugify(collection.name) === slugify(params?.kategoria as string)
  );

  return {
    props: {
      category,
    },
  };
}

export async function getStaticPaths() {
  const paths = collections
    .map((collection) => collection.name)
    .map((name) => `/${slugify(name)}`);
  return {
    paths,
    fallback: false,
  };
}
