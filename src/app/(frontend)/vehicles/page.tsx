import { sanityFetch } from "@/sanity/lib/live";
import { VEHICLES_QUERY } from "@/sanity/lib/queries";
// import { PostCard } from "@/components/PostCard";
import { Title } from "@/components/Title";
import { VehicleCard } from "@/components/VehicleCard";

export default async function Page() {
  const { data: vehicles } = await sanityFetch({ query: VEHICLES_QUERY });

  return (
    <main className="w-full flex items-center justify-center  flex-col">
      <div className="flex lg:w-[1000px] w-[400px] mt-6 ">
        <Title>Featured Tours</Title>
      </div>
      <div className="h-auto grid lg:grid-flow-col grid-flow-row lg:grid-cols-3 items-center justify-center mt-4 max-w-[1000px]  gap-4">
        {vehicles.map((vehicles) => (
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
      <div className="flex lg:w-[1000px] w-[400px] mt-6 ">
        <Title>All Tours</Title>
      </div>
    </main>
  );
}
