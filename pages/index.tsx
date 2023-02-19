import LogoContainer from "@/components/containers/LogoContainer";
import ContentLayout from "@/components/layout/ContentLayout";
import { collections } from "@/data/data";
import { slugify } from "@/utils/helpers";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function MainPage({
  teams,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContentLayout title="schdesign logótár">
      {teams.map((t) => (
        <div key={t.name} className="py-8">
          <div className="flex py-5 items-center gap-4">
            <span className="text-gray-400 text-4xl uppercase font-medium">
              {t.name}
            </span>
            <div className="flex-grow border-t border-gray-400" />
          </div>
          <LogoContainer logos={t.logos} />
        </div>
      ))}
    </ContentLayout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const teams = collections
    .map((c) => {
      return {
        ...c,
        logos: c.logos
          .map((l) => ({
            ...l,
            collection: c.name,
          }))
          .sort((a, b) => a.name.localeCompare(b.name)),
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return {
    props: {
      teams,
    },
  };
}
