import { VEHICLES_QUERYResult } from "@/sanity/types";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { MdPeopleAlt } from "react-icons/md";
import { FaRegSnowflake } from "react-icons/fa";

export function VehicleCard(props: VEHICLES_QUERYResult[0]) {
  const {
    title,
    slug,
    price,
    mileage,
    condition,
    madeYear,
    AirConditioned,
    engine,
    maxPeople,
    mainImage,
  } = props;

  return (
    <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[20rem] hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-46 m-2.5 overflow-hidden rounded-lg bg-green-200 text-white">
        {mainImage && (
          <Image
            className="transition-transform rounded-md duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
            src={urlFor(mainImage).url()}
            alt={""}
            width={400}
            height={200}
          />
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h1 className="text-xl font-semibold text-slate-800">{title}</h1>
        <div className="grid grid-cols-2 gap-2 mt-4 text-slate-800">
          {/* Price */}
          <div className="font-semibold text-cyan-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            ${price}
          </div>

          {/* Max People */}
          <p className="flex items-center text-slate-600">
            <MdPeopleAlt className="text-2xl mr-2" /> Seats: {maxPeople}
          </p>

          {/* Air Conditioned */}
          <p className="flex items-center text-slate-600">
            <FaRegSnowflake className="text-2xl mr-2" />
            {AirConditioned ? "AC Available" : "No AC"}
          </p>

          {/* Engine */}
          <p className="text-slate-600">
            Engine: <span className="font-semibold">{engine}</span>
          </p>

          {/* Model Year */}
          <p className="text-slate-600">
            Model: <span className="font-semibold">{madeYear}</span>
          </p>

          {/* Condition */}
          <p className="text-slate-600">
            Condition: <span className="font-semibold">{condition}</span>
          </p>

          {/* Mileage */}
          <p className="text-slate-600">
            Mileage: <span className="font-semibold">{mileage} km</span>
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="px-4 pb-6">
        <Link
          className="w-full inline-block bg-slate-800 text-white py-2 px-4 rounded-md text-center transition-all hover:bg-slate-700 shadow-md hover:shadow-lg"
          href={`/vehicles/${slug!.current}`}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
