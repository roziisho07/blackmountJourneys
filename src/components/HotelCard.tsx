// import { urlFor } from "@/sanity/lib/image";
import { HOTELS_QUERYResult } from "@/sanity/types";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function HotelCard(props: HOTELS_QUERYResult[0]) {
  const {
    _id,
    title,
    slug,
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
  } = props;

  return (
    <div className="cursor-pointer group relative flex-col lg:flex-row   flex my-6 bg-white shadow-sm border border-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-300 w-[20em] md:w-[1000px]">
      {/* Image Section */}
      <div className=" relative  h-56 m-2.5 overflow-hidden text-white ">
        <Image
          className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
          src={urlFor(mainImage ? mainImage : "").url()}
          alt={mainImage?.alt || ""}
          width={300}
          height={400}
        />
      </div>

      {/* Content Section */}
      <div className="p-2 flex flex-col w-full">
        <div className=" flex justify-between">
          <div>
            <h1 className="font-bold">{title}</h1>
            {/* address link */}
            <Link
              href={location_link || ""}
              className="font-sm cursor-pointer text-xs text-blue-600 italic"
            >
              {/* address */}
              {location}
            </Link>
          </div>

          <p className="text-slate-600 font-semibold leading-normal flex items-center gap-2 ">
            ⭐️ {rating}
          </p>
        </div>

        <div className="  gap-2 pt-2 text-slate-800 text-l font-semibold h-10 flex justify-between">
          <div className="">
            <p className="left-0 font-semibold leading-normal  flex items-center   w-[4rem] text-cyan-500">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span>{`${price}`}</span>
            </p>
          </div>

          <p className="text-slate-600 font-semibold leading-normal flex items-center gap-2">
            {room_size}
          </p>
          <h1>{_id}</h1>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1  h-full ">
          <div className=" col-span-2 py-2 ">
            <div className="grid grid-rows-2 text-sm  w-full">
              <p className="text-slate-600 i leading-normal font-light flex items-centers gap-2">
                {bed}
              </p>

              <p className="text-slate-600 leading-normal font-light">
                {room_standard}
              </p>
            </div>
          </div>

          <div className=" h-[20-rem] flex  w-full  ">
            <div className="w-full    ">
              <div className="flex justify-between lg:flex-col ">
                <div className="grid grid-cols-2 text-slate-600 gap-2   justify-center items-center text-xs">
                  <span className="text-slate-600  border border-slate-200  rounded-3xl  gap-2 px-4 p-1 flex justify-center items-center text-xs">
                    {amenity1}
                  </span>
                  <span className="text-slate-600  border border-slate-200  rounded-3xl  gap-2 px-4 p-1 flex justify-center items-center text-xs">
                    {amenity2}
                  </span>
                  <span className="text-slate-600  border border-slate-200  rounded-3xl  gap-2 px-4 p-1 flex justify-center items-center text-xs">
                    {amenity3}
                  </span>
                  <span className="text-slate-600  border border-slate-200  rounded-3xl  gap-2 px-4 p-1 flex justify-center items-center text-xs">
                    {amenity4}
                  </span>
                </div>
                <div className="pt-6 w-30  flex justify-end ">
                  <Link
                    className=" w-full bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    href={`/hotels/${slug!.current}`  }
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button Section */}
    </div>
  );
}
