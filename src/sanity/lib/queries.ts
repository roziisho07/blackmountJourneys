import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const TOURS_QUERY =
  defineQuery(`*[_type == "tour" && defined(slug.current)] | order(_createdAt desc)[0...12] {
  _id,
  title,
  slug,
  subdescription,
  mainImage,
  duration,
  price,
  reviews,
  Subheading,
  body,
  featured, 
}
`);

export const TOURS_SLUGS_QUERY =
  defineQuery(`*[_type == "tour" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const TOUR_QUERY =
  defineQuery(`*[_type == "tour" && slug.current == $slug][0]{
  _id,
  title,
  subdescription,
  mainImage,
  duration,
  price,
  reviews,
  Subheading,
  body,
}
`);
export const VEHICLES_QUERY =
  defineQuery(`*[_type == "vehicals" && defined(slug.current)] | order(_createdAt desc)[0...12] {
  _id,
 title,
    price,
    mileage,
    condition,
    madeYear,
    AirConditioned,
    engine,
    maxPeople,
    mainImage,
    slug,
    
}
`);
export const VEHICLE_QUERY =
  defineQuery(`*[_type == "vehicals" && defined(slug.current)] | order(_createdAt desc)[0] {
 _id,
  title,
  slug,
  mainImage,
  maxPeople,
  door,
  transmition,
  AirConditioned,
  VehicalType,
  driver,
  price,
  mileage,
  body,
  engine,
  condition,
  madeYear  
}
`);

export const VEHICLE_SLUGS_QUERY =
  defineQuery(`*[_type == "hotel" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const HOTELS_QUERY =
  defineQuery(`*[_type == "hotel" && defined(slug.current)] | order(_createdAt desc) {
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

    
}
`);
export const HOTEL_QUERY =
  defineQuery(`*[_type == "hotel" && defined(slug.current)] | order(_createdAt desc)[0] {
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
                body,
                
                }
`);

export const HOTEL_SLUGS_QUERY =
  defineQuery(`*[_type == "hotel" && defined(slug.current)]{ 
  "slug": slug.current
}`);
export const GALLERY_SLUGS_QUERY =
  defineQuery(`*[_type == "gallery" && defined(slug.current)]{ 
  "slug": slug.current
}`);
export const GALLERY_QUERY =
  defineQuery(`*[_type == "gallery" && defined(slug.current)] | order(_createdAt desc)[0] {
    _id,
    title,
    subTitle,
    slug,
   images        
}
`);
export const GALLERYS_QUERY =
  defineQuery(`*[_type == "gallery" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title,
    subTitle,
    slug,
   images        
}
`);
