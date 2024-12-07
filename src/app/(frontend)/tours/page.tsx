import { sanityFetch } from "@/sanity/lib/live";
import { TOURS_QUERY } from "@/sanity/lib/queries";
// import { PostCard } from "@/components/PostCard";
import { Title } from "@/components/Title";
import { TourCard } from "@/components/TourCard";

export default async function Page() {
  const { data: tours } = await sanityFetch({ query: TOURS_QUERY });

  return (
    <main className="w-full flex items-center justify-center  flex-col">
      <div className="flex lg:w-[1000px] w-[400px] mt-6 ">
        <Title>Featured Tours</Title>
      </div>
      <div className="h-auto grid lg:grid-flow-col grid-flow-row lg:grid-cols-3 items-center justify-center mt-4 max-w-[1000px]  gap-4">
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
      <div className="flex lg:w-[1000px] w-[400px] mt-6 ">
        <Title>All Tours</Title>
      </div>

      <div className="h-auto grid lg:grid-flow-col grid-flow-row lg:grid-cols-3 items-center justify-center mt-4 max-w-[1000px]  gap-4">
        {tours.map((tour) => (
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
    </main>
  );
}
