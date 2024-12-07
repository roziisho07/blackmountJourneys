import { PortableText } from "next-sanity";
import { TOUR_QUERYResult } from "@/sanity/types";
import { Title } from "@/components/Title";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { components } from "@/sanity/PortableTextComponents";
import Link from "next/link";

export function Tour(props: NonNullable<TOUR_QUERYResult>) {
  const {
    title,
    body,
    mainImage,
    subdescription,
    duration,
    price,
    reviews,
    Subheading,
  } = props;

  return (
    <div className="w-full flex items-center justify-center md:px-8 py-8 ">
      <div className="w-full max-w-5xl flex flex-col justify-center gap-8  ">
        {/* Tour Image Section */}
        <div className="flex flex-col items-center">
          <div className="w-full h-auto overflow-hidden rounded-md">
            {mainImage && (
              <Image
                src={urlFor(mainImage).url()}
                alt={title || "Tour image"}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                width={800}
                height={400}
              />
            )}
          </div>
          {/* Title and Subheading */}
          <div className="grid w-full pt-4">
            <Title>{title}</Title>
            {Subheading && (
              <h2 className="font-sans text-lg md:text-xl text-gray-700">
                {Subheading}
              </h2>
            )}
            {subdescription && (
              <p className="text-gray-600  mt-2">{subdescription}</p>
            )}
          </div>
        </div>

        {/* Tour Details Section */}
        <div className="flex flex-col w-full rounded-md border border-cyan-600 py-6 px-4 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <p className="font-semibold flex items-center text-cyan-500">
              <span className="text-gray-600">{`Price: `}</span>
              <span className="ml-2">${price}</span>
            </p>
            <p className="text-gray-600 font-semibold">{`Duration: ${duration}`}</p>
            <p className="text-gray-600 font-semibold">{`Reviews: ${reviews} ⭐`}</p>
          </div>
          <Link
            href={"/contact"}
            className="mt-4 bg-yellow-400 font-bold text-white py-2 px-4 rounded-md hover:bg-yellow-600 w-32 text-center"
          >
            Book Now{" "}
          </Link>
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
