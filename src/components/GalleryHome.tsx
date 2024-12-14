"use client";
import { GALLERY_QUERYResult } from "@/sanity/types";
import { Title } from "@/components/Title";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";
// import Link from "next/link";

// Extract the type of an individual gallery image from GALLERY_QUERYResult
type ImageType = NonNullable<
  NonNullable<GALLERY_QUERYResult>["images"]
>[number];

export function GalleryHome(props: GALLERY_QUERYResult) {
  // Initialize state at the top of the component
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  // If props is null, render nothing
  if (!props) {
    return null;
  }

  const { title, subTitle, images } = props;

  const openImage = (image: ImageType) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <article className="flex flex-col justify-start ">
      <header className="flex flex-col gap-4 items-start py-8">
        {title && <Title>{title}</Title>}
        {subTitle && <h3 className="text-lg text-gray-500">{subTitle}</h3>}
      </header>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 ">
        {Array.isArray(images) &&
          images.map((image) => (
            <div
              key={image._key}
              onClick={() => openImage(image)}
              className="relative group cursor-pointer overflow-hidden bg-gray-100 h-[24rem]"
            >
              {image.asset && (
                <Image
                  width={600}
                  height={600}
                  src={urlFor(image.asset).url()} // Ensure urlFor is correctly implemented
                  alt={image.alt || " "}
                  className="object-cover rounded-md transform group-hover:scale-105 transition duration-300"
                />
              )}
            </div>
          ))}
      </div>

      {selectedImage && selectedImage.asset && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={closeImage}
        >
          <div className="relative max-w-4xl mx-auto">
            <Image
              width={1200}
              height={1200}
              src={urlFor(selectedImage.asset).url()} // Ensure urlFor is correctly implemented
              alt={selectedImage.alt || " "}
              className="object-contain rounded-md max-w-full max-h-full"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 text-3xl font-bold hover:bg-opacity-70 transition"
              onClick={closeImage}
            >
              &times;
            </button>
          </div>
        </div>
      )}
      
    </article>
  );
}
