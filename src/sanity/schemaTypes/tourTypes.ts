// import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const tourTypes = defineType({
  name: "tour",
  title: "Tour",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "featured",
      type: "boolean",
    }),
    defineField({
      name: "duration",
      type: "string",
    }),
    defineField({
      name: "Mode_of_Transportation",
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
      name: "subdescription",
      type: "string",
    }),
    defineField({
      name: "reviews",
      type: "number",
    }),
    defineField({
      name: "price",
      type: "number",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),

    defineField({
      name: "Subheading",
      type: "string",
    }),
  ],
});
