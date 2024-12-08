import { defineField, defineType } from "sanity";

export const hotels = defineType({
  name: "hotel",
  title: "Hotel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "location_link",
      type: "string",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "price",
      type: "string",
    }),
    defineField({
      name: "bed",
      type: "string",
    }),
    defineField({
      name: "room_size",
      type: "string",
    }),
    defineField({
      name: "room_standard",
      type: "string",
    }),

    defineField({
      name: "rating",
      type: "string",
    }),
    defineField({
      name: "amenity1",
      type: "string",
    }),
    defineField({
      name: "amenity2",
      type: "string",
    }),
    defineField({
      name: "amenity3",
      type: "string",
    }),
    defineField({
      name: "amenity4",
      type: "string",
    }),

    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],
});
