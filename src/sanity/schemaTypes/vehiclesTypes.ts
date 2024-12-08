import { defineField, defineType } from "sanity";

export const vehical = defineType({
  name: "vehicals",
  title: "Vehical",
  type: "document",
  fields: [
    defineField({
      name: "title",
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
      name: "maxPeople",
      type: "string",
    }),
    defineField({
      name: "door",
      type: "string",
    }),
    defineField({
      name: "transmition",
      type: "string",
    }),
    defineField({
      name: "AirConditioned",
      type: "boolean",
    }),

    defineField({
      name: "VehicalType",
      type: "string",
    }),
    defineField({
      name: "driver",
      type: "string",
    }),
    defineField({
      name: "price",
      type: "number",
    }),
    defineField({
      name: "mileage",
      type: "string",
    }),

    defineField({
      name: "body",
      type: "blockContent",
    }),

    defineField({
      name: "engine",
      type: "string",
    }),
    defineField({
      name: "condition",
      type: "string",
    }),
    defineField({
      name: "made_year",
      type: "string",
    }),
  ],
});
