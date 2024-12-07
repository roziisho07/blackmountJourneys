import { TOURS_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export function TourCard(props: TOURS_QUERYResult[0]) {
  const { title, mainImage, slug, price, duration, reviews } = props;

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
      <div className="h-16">
        <div className="flex items-center justify-center">
          <h6 className="mb-2 text-slate-800 text-l font-semibold">{title}</h6>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-flow-col gap-4 w-full px-8">
            <p className="font-semibold flex items-center text-cyan-500">
              <span className="">
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
            <h1 className="font-semibold text-gray-700">{duration}</h1>
            <h1 className="font-semibold text-gray-700">⭐️ {reviews}</h1>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex items-center justify-center">
        <div className="px-4 pb-4 pt-0">
          <Link
            className="rounded-xl border border-cyan-600 text-cyan-900 py-1 px-4 text-center text-sm transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            href={`/tours/${slug!.current}`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
