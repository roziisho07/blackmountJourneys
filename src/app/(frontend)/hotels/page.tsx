import { sanityFetch } from "@/sanity/lib/live";
import { HOTELS_QUERY } from "@/sanity/lib/queries";
import { Title } from "@/components/Title";
import HotelCard from "@/components/HotelCard";

export default async function Page() {
  const { data: hotels } = await sanityFetch({ query: HOTELS_QUERY });

  return (
    <main className="w-full flex items-center justify-center flex-col">
      {/* Featured Hotels Section */}
      <div className="flex lg:w-[1000px] w-[400px] mt-6">
        <Title>Featured Hotels</Title>
      </div>
      <div className="h-auto flex flex-col items-center justify-center mt-4 max-w-[1000px] gap-4">
        {hotels.map((hotel) => (
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

      {/* All Hotels Section */}
    </main>
  );
}
