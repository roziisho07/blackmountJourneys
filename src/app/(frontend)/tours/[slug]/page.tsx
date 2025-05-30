// import { Tour } from "@/components/Tour";
import { Tour } from "@/components/Tour";
import { sanityFetch } from "@/sanity/lib/live";
import { TOUR_QUERY } from "@/sanity/lib/queries";

import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: tour } = await sanityFetch({
    query: TOUR_QUERY,
    params: await params,
  });

  if (!tour) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Tour {...tour} />
    </main>
  );
}
