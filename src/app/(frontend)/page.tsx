import Link from "next/link";
// import { Title } from "@/components/Title";

import bgimg from "./1701026673822 (1).jpg";

import { sanityFetch } from "@/sanity/lib/live";
import { TOURS_QUERY, VEHICLES_QUERY } from "@/sanity/lib/queries";
// import { PostCard } from "@/components/PostCard";
import Image from "next/image";
import { TourCard } from "@/components/TourCard";
import SearchBar from "@/components/SearchBar";
import Hero from "@/components/Hero";
import { VehicleCard } from "@/components/VehicleCard";

export default async function Page() {
  const { data: tours } = await sanityFetch({ query: TOURS_QUERY });
  const { data: vehicle } = await sanityFetch({ query: VEHICLES_QUERY });

  return (
    <section className="">
      {/* <Title>Home Page</Title>
      <hr />
      <Link href="/posts">Latest Blogs &rarr;</Link>
      <Link href="/tours">Latest Tours &rarr;</Link> */}
      <div className="relative z-20 h-[440px]">
        {/* Background Image */}
        <Image
          src={bgimg}
          alt="Beach Background"
          layout="fill"
          objectFit="cover"
          className="-z-10 "
        />

        {/* Hero Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"></div>

        {/* SearchBar */}
        <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2">
          <SearchBar />
        </div>
      </div>
      {/* <FeaturedTours /> */}
      <section className="w-full flex items-center justify-center">
        <div className="h-auto flex flex-col items-center justify-center mt-[8rem] max-w-[1000px] ">
          <Hero />
          {/* <Tours /> */}
          <div className="overflow-scroll max-w-[1000px] flex flex-col items-center ">
            {/* <featuredTours /> */}

            <div className="overflow-scroll max-w-[1000px] flex flex-col items-center pb-8">
              {/* <featuredTours /> */}
              <div className="h-auto grid lg:grid-flow-col grid-flow-row lg:grid-cols-3 items-center justify-center mt-4   gap-4">
                {tours
                  .filter((tour) => tour.featured === true)
                  .map((tour) => (
                    <TourCard
                      key={tour._id}
                      title={tour.title}
                      slug={tour.slug}
                      price={tour.price}
                      duration={tour.duration}
                      reviews={tour.reviews}
                      mainImage={tour.mainImage}
                      Subheading={tour.Subheading}
                      _id={""}
                      subdescription={null}
                      body={tour.body}
                      featured={tour.featured}
                    />
                  ))}
              </div>

              <Link
                href={"/tours"}
                className="rounded-lg p-2 text-blue-500 font-semibold  hover:text-blue-800"
              >
                See All →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="h-auto flex flex-col items-center justify-center mt-[8rem] max-w-[1000px] ">
          <Hero />
          {/* <Tours /> */}
          <div className="overflow-scroll max-w-[1000px] flex flex-col items-center pb-8">
            {/* <featuredTours /> */}

            <div className="h-auto grid lg:grid-flow-col grid-flow-row lg:grid-cols-3 items-center justify-center mt-4   gap-4">
              {vehicle
                .filter(() => [0, ...[1]])
                .map((vehicles) => (
                  <VehicleCard
                    _id={""}
                    key={vehicles._id}
                    title={vehicles.title}
                    slug={vehicles.slug}
                    price={vehicles.price}
                    mileage={vehicles.mileage}
                    condition={vehicles.condition}
                    madeYear={vehicles.madeYear}
                    AirConditioned={vehicles.AirConditioned}
                    engine={vehicles.engine}
                    maxPeople={vehicles.maxPeople}
                    mainImage={vehicles.mainImage}
                  />
                ))}
            </div>

            <Link
              href={"/tours"}
              className="rounded-lg p-2 text-blue-500 font-semibold  hover:text-blue-800 hover:underline"
            >
              See All →
            </Link>
          </div>
        </div>
      </section>
      {/*  */}
    </section>
  );
}
