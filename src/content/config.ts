// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    createdDate: z.date(),
    updated: z.date().optional(),
    description: z.string(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()),
    draft: z.boolean(),
  }),
  /* ... */
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
