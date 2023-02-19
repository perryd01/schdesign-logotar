import LogoContainer from "@/components/containers/LogoContainer";
import ContentLayout from "@/components/layout/ContentLayout";
import { collections } from "@/data/data";
import { slugify } from "@/utils/helpers";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function SearchPage({
  logos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [search, setSearch] = useState<string>("");

  const filteredLogos = useMemo(
    () =>
      logos.filter(
        (l) =>
          l.name.toLowerCase().includes(search.toLowerCase()) ||
          l.collection.toLowerCase().includes(search.toLowerCase())
      ),
    [logos, search]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setSearch(v);
  };

  return (
    <ContentLayout title="Keresés">
      <div className="py-4">
        <input
          type={"text"}
          max={30}
          className="rounded-2xl w-full max-w-sm"
          value={search}
          onChange={handleSearch}
          placeholder="Kör vagy kategória neve"
        />
      </div>
      <LogoContainer logos={filteredLogos} />
    </ContentLayout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const logos = collections
    .map((c) => {
      return c.logos.map((l) => {
        return {
          ...l,
          collection: c.name,
        };
      });
    })
    .flat()
    .sort((a, b) => a.name.localeCompare(b.name));

  return {
    props: {
      logos,
    },
  };
}
