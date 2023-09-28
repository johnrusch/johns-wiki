// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const itemCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.nullable(z.string().optional()),
      image: z.nullable(image().optional()),
      imageAlt: z.nullable(z.string()).optional(),
      link: z.nullable(z.string().url()).optional(),
      draft: z.boolean(),
      createdDate: z.coerce.date(),
      tags: z.array(z.string()),
    }),
  /* ... */
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  items: itemCollection,
};
