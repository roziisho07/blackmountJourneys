import { PortableText } from "next-sanity";
import { VEHICLE_QUERYResult } from "@/sanity/types";
// import { Title } from "@/components/Title";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { components } from "@/sanity/PortableTextComponents";
// import Link from "next/link";
// import { FaStar } from "react-icons/fa";

export function Vehicle(props: NonNullable<VEHICLE_QUERYResult>) {
  const {
    title,
    // slug,
    mainImage,
    maxPeople,
    door,
    transmition,
    AirConditioned,
    VehicalType,
    driver,
    price,
    mileage,
    body,
    engine,
    condition,
    madeYear,
  } = props;
  return (
    <div className="w-full flex items-center justify-center px-4 md:px-8 py-8">
      <div className="w-full max-w-5xl flex flex-col justify-center gap-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-start w-full pt-4">
            <h1 className="font-sans font-extrabold text-2xl md:text-4xl">
              {title}
            </h1>
            <p className="text-gray-600">
              {`${VehicalType} | ${condition} | ${madeYear}`}
            </p>
            <p className="text-gray-600">{`Transmission: ${transmition}`}</p>
            <p className="text-gray-600">{`Air Conditioned: ${AirConditioned ? "Yes" : "No"}`}</p>
          </div>
        </div>
        <div className=" m-2.5 overflow-hidden text-white">
          {mainImage && (
            <Image
              src={urlFor(mainImage).url()}
              alt={""}
              className=" "
              width={400}
              height={400}
            />
          )}
        </div>

        <div className="flex flex-col w-full rounded-md border border-cyan-600 py-6 px-4 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p className="font-semibold">
              <span className="text-gray-600">{`Price:`}</span>
              <span className="ml-2">${price}/day</span>
            </p>
            <p className="font-semibold">{`Max People: ${maxPeople}`}</p>
            <p className="font-semibold">{`Mileage: ${mileage}`}</p>
            <p className="font-semibold">{`Doors: ${door}`}</p>
            <p className="font-semibold">{`Engine: ${engine} cc`}</p>
            <p className="font-semibold">{`Driver: ${driver}`}</p>
          </div>
          <button className="mt-4 bg-yellow-400 font-bold text-white py-2 px-4 rounded-md hover:bg-yellow-600 w-32">
            Book Now
          </button>
        </div>

        <div className="content w-full flex flex-col gap-4 font-sans text-gray-800 mt-6">
          {body && body.length > 0 ? (
            <div className="prose prose-sm sm:prose-lg prose-h6:grid-cols-2">
              <PortableText value={body} components={components} />
            </div>
          ) : (
            <p className="text-gray-600">
              No content available for this section.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
