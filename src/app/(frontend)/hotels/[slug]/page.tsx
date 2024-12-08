// import { Tour } from "@/components/Tour";
import { Hotel } from "@/components/Hotel";
import { sanityFetch } from "@/sanity/lib/live";
import { HOTEL_QUERY } from "@/sanity/lib/queries";

import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: hotel } = await sanityFetch({
    query: HOTEL_QUERY,
    params: await params,
  });

  if (!hotel) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Hotel {...hotel} />
    </main>
  );
}
