import Link from "next/link";
import { Title } from "@/components/Title";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Home Page</Title>
      <hr />
      <Link href="/posts">Latest Blogs &rarr;</Link>
      <Link href="/tours">Latest Tours &rarr;</Link>
    </section>
  );
}
