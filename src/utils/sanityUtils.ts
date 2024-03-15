import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "z7i8a3iq",
  dataset: "production",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
