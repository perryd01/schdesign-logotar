import ContentLayout from "@/components/layout/ContentLayout";
import { collections } from "@/data/data";
import { slugify } from "@/utils/helpers";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

export default function CategoriesPage({
  collectionNames,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentLayout title="Kategóriák">
      <div>
        <ul>
          {collectionNames.map((name) => (
            <Link key={name} href={`/${slugify(name)}`}>
              <li>{name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </ContentLayout>
  );
}

export async function getStaticProps() {
  const collectionNames = collections.map((c) => c.name);
  return {
    props: {
      collectionNames,
    },
  };
}
