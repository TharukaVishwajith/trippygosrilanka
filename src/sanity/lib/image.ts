import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { apiVersion, dataset, projectId, useCdn } from './env';

const builder = createImageUrlBuilder({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

export function urlForImage(source: Image) {
  return builder.image(source);
}
