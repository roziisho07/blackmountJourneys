import { PortableText } from "next-sanity";
import { HOTEL_QUERYResult } from "@/sanity/types";
// import { Title } from "@/components/Title";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { components } from "@/sanity/PortableTextComponents";
import Link from "next/link";

export function Hotel(props: NonNullable<HOTEL_QUERYResult>) {
  const {
    // _id,
    title,
    // slug,
    mainImage,
    location_link,
    location,
    bed,
    room_size,
    room_standard,
    rating,
    amenity1,
    amenity2,
    amenity3,
    amenity4,
    price,
    body,
  } = props;

  return (
    <div className="w-full flex items-center justify-center px-4 md:px-8 py-8">
      <div className="w-full max-w-5xl flex flex-col justify-center gap-8">
        {/* Main Image Section */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-start w-full pt-4">
            <h1 className="font-sans font-extrabold text-2xl md:text-6xl">
              {title}
            </h1>
            <p className="text-gray-600">{`Location: ${location}`}</p>
            <Link
              href={location_link || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View on Map
            </Link>
            {/* <p className="text-gray-600">{`Room Standard: ${room_standard}`}</p>
            <p className="text-gray-600">{`Room Size: ${room_size}`}</p>
            <p className="text-gray-600">{`Bed: ${bed}`}</p> */}
          </div>
          <div className="mt-4 font-bold text-white rounded-sm flex  w-full">
            {mainImage && (
              <Image
                src={urlFor(mainImage).url()}
                alt={mainImage.alt || ""}
                className="rounded-lg object-cover"
                width={400}
                height={400}
              />
            )}
          </div>
        </div>

        {/* Carousel Section */}

        {/* Hotel Details Section */}
        <div className="flex flex-col w-full rounded-md border border-cyan-600 py-6 px-4 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p className="font-semibold">
              <span className="text-gray-600">{`Price: `}</span>
              <span className="ml-2">${price}/night</span>
            </p>

            <p className="text-gray-600">{`Room Standard: ${room_standard}`}</p>
            <p className="text-gray-600">{`Room Size: ${room_size}`}</p>
            <p className="text-gray-600">{`Bed: ${bed}`}</p>
            <p className="font-semibold">{`Rating: ${rating} ⭐`}</p>
            <p className="font-semibold">{`${amenity1}`}</p>
            <p className="font-semibold">{`${amenity2}`}</p>
            <p className="font-semibold">{`${amenity3}`}</p>
            <p className="font-semibold">{`${amenity4}`}</p>
          </div>
          <button className="mt-4 bg-yellow-400 font-bold text-white py-2 px-4 rounded-md hover:bg-yellow-600 w-32">
            Book Now
          </button>
        </div>

        {/* Content Section */}
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
