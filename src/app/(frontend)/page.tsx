import Link from "next/link";
// import { Title } from "@/components/Title";

import bgimg from "./1701026673822 (1).jpg";

import { sanityFetch } from "@/sanity/lib/live";
import {
  HOTELS_QUERY,
  TOURS_QUERY,
  VEHICLES_QUERY,
  GALLERY_QUERY,
} from "@/sanity/lib/queries";
// import { PostCard } from "@/components/PostCard";
import Image from "next/image";
import { TourCard } from "@/components/TourCard";
import SearchBar from "@/components/SearchBar";
import Hero from "@/components/Hero";
import { VehicleCard } from "@/components/VehicleCard";
import HotelCard from "@/components/HotelCard";
import { GalleryHome } from "@/components/GalleryHome";
import { GALLERY_QUERYResult } from "@/sanity/types";

export default async function Page() {
  const { data: tours } = await sanityFetch({ query: TOURS_QUERY });
  const { data: vehicle } = await sanityFetch({ query: VEHICLES_QUERY });
  const { data: hotels } = await sanityFetch({ query: HOTELS_QUERY });
  const { data: gallery }: { data: GALLERY_QUERYResult } = await sanityFetch({
    query: GALLERY_QUERY,
  });
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
          {/* <Hero /> */}
          <div className="flex flex-col w-full  justify-start  text-left text-gray-800  ">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our Latest Vehicles
            </h1>
            <p className="max-w-2xl text-lg md:text-xl mb-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sint quasi laborum nam corporis obcaecati enim modi hic.
            </p>
          </div>
          {/* <Tours /> */}
          <div className="overflow-scroll max-w-[1000px] flex flex-col items-center pb-8">
            {/* <featuredTours /> */}

            <div className="h-auto grid lg:grid-flow-col grid-flow-row lg:grid-cols-3 items-center justify-center mt-4   gap-4">
              {vehicle.slice(0, 3).map((vehicles) => (
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
              href={"/vehicles"}
              className="rounded-lg p-2 text-blue-500 font-semibold  hover:text-blue-800 hover:underline"
            >
              See All →
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center bg-gray-100">
        <div className="h-auto flex flex-col items-center justify-center mt-[8rem] max-w-[1000px] ">
          {/* <Hero /> */}
          <div className="flex flex-col w-full  justify-start  text-left text-gray-800   ">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Explore our Latest Tours
            </h1>
            <p className="max-w-2xl text-lg md:text-xl mb-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sint quasi laborum nam corporis obcaecati enim modi hic.
            </p>
          </div>
          {/* <Tours /> */}
          <div className="overflow-scroll max-w-[1000px] flex flex-col items-center pb-8">
            {/* <featuredTours /> */}

            <div className="h-auto items-center justify-center mt-4   gap-4">
              {hotels.slice(0, 3).map((hotel) => (
                <HotelCard
                  key={hotel._id}
                  _id=""
                  title={hotel.title}
                  slug={hotel.slug}
                  mainImage={hotel.mainImage}
                  location_link={hotel.location_link}
                  location={hotel.location}
                  bed={hotel.bed}
                  room_size={hotel.room_size}
                  room_standard={hotel.room_standard}
                  rating={hotel.rating}
                  amenity1={hotel.amenity1}
                  amenity2={hotel.amenity2}
                  amenity3={hotel.amenity3}
                  amenity4={hotel.amenity4}
                  price={hotel.price}
                />
              ))}
            </div>

            <Link
              href={"/hotels"}
              className="rounded-lg p-2 text-blue-500 font-semibold  hover:text-blue-800 hover:underline"
            >
              See All →
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center mb-10 ">
        <div className="h-auto flex flex-col items-center justify-center mt-[8rem] max-w-[1000px] ">
          <div>
            {gallery ? (
              <GalleryHome
                _id={gallery._id} // Pass `_id`
                slug={gallery.slug} // Pass `slug`
                title={gallery.title}
                subTitle={gallery.subTitle}
                images={gallery.images}
              />
            ) : (
              <></>
            )}
          </div>
          <div className="w-full mt-6">
            <Link
              href={"/gallery"}
              className="font-serif px-4  py-2 bg-cyan-600 hover:border-cyan-600 active:border-cyan-600 text-white"
            >
              Visit Gallery
            </Link>
          </div>
        </div>
      </section>

      {/*  */}
    </section>
  );
}
