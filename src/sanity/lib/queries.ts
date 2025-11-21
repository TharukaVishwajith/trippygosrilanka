import { groq } from 'next-sanity';

export const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  readTime,
  publishedAt,
  mainImage
}`;
