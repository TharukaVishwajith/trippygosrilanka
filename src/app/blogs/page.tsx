import Image from 'next/image';
import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { allPostsQuery } from '@/sanity/lib/queries';
import styles from './page.module.css';
import type { Image as SanityImage } from 'sanity';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Travel Blog | TrippyGo Sri Lanka',
  description:
    'Explore our latest travel stories, guides, and tips for visiting Sri Lanka. Discover hidden gems, cultural insights, and adventure spots.',
};

interface BlogPost {
  _id: string;
  title: string;
  slug?: { current: string };
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  readTime?: string;
  mainImage?: SanityImage;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  return client.fetch<BlogPost[]>(allPostsQuery, {}, { next: { revalidate } });
}

function formatDate(date?: string) {
  if (!date) return '';
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date));
}

export default async function BlogsPage() {
  const blogPosts = await getBlogPosts();
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Travel Journal</h1>
        <p className={styles.subtitle}>
          Stories, tips, and guides to help you plan your perfect Sri Lankan adventure. Dive into our collection of articles curated by local experts.
        </p>
      </div>

      {blogPosts.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No blog posts found. Add your first article in the Sanity Studio.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {blogPosts.map((post) => {
            const imageUrl = post.mainImage ? urlForImage(post.mainImage).width(900).height(600).fit('crop').url() : '/assets/blog-beach.webp';
            return (
              <article key={post._id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.content}>
                  <span className={styles.category}>{post.category || 'Travel'}</span>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt || 'Stay tuned for more details on this adventure.'}</p>
                  <div className={styles.footer}>
                    <span className={styles.date}>
                      {formatDate(post.publishedAt)} {post.readTime ? `• ${post.readTime}` : ''}
                    </span>
                    <span className={styles.readMore}>
                      Read Article
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}
