import { GalleryHome } from "@/components/GalleryHome";
import { sanityFetch } from "@/sanity/lib/live";
import { GALLERY_QUERY, GALLERYS_QUERY } from "@/sanity/lib/queries";
import { GALLERY_QUERYResult, GALLERYS_QUERYResult } from "@/sanity/types";

export default async function Page() {
  const { data: gallery }: { data: GALLERY_QUERYResult } = await sanityFetch({
    query: GALLERY_QUERY,
  });
  const { data: gallery2 }: { data: GALLERYS_QUERYResult } = await sanityFetch({
    query: GALLERYS_QUERY,
  });

  if (!gallery) {
    return (
      <main>
        <p>No gallery found.</p>
      </main>
    );
  }

  return (
    <main className="px-10">
      <div>
        {/* <GalleryHome
          _id={gallery._id} // Pass `_id`
          slug={gallery.slug} // Pass `slug`
          title={gallery.title}
          subTitle={gallery.subTitle}
          images={gallery.images}
        /> */}
      </div>
      {gallery2.map((gallery2) => (
        <GalleryHome
          key={gallery2._id}
          _id={gallery2._id} // Pass `_id`
          slug={gallery2.slug} // Pass `slug`
          title={gallery2.title}
          subTitle={gallery2.subTitle}
          images={gallery2.images}
        />
      ))}
    </main>
  );
}
