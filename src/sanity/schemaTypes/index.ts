import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";

import { tourTypes } from "./tourTypes";
import { vehical } from "./vehiclesTypes";
import { authorType } from "./authorType";
import { hotels } from "./hotelTypes";
import { gallery} from "./galleryTypes";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    tourTypes,
    vehical,
    hotels,
    gallery,
  ],
};
