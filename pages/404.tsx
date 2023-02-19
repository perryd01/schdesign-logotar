import ContentLayout from "@/components/layout/ContentLayout";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <ContentLayout title="Nem található">
      <p>sajnos ez az oldal nem található</p>
      <Link href={"/"}>vissza a főoldalra</Link>
    </ContentLayout>
  );
}
