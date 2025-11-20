import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Travel Blog | TrippyGo Sri Lanka',
    description: 'Explore our latest travel stories, guides, and tips for visiting Sri Lanka. Discover hidden gems, cultural insights, and adventure spots.',
};

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    readTime: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Top 10 Hidden Beaches in Sri Lanka",
        excerpt: "Discover the untouched coastlines and secret bays that make Sri Lanka a beach lover's paradise. From the south to the east, we guide you to the best spots.",
        category: "Travel Guide",
        date: "Nov 18, 2024",
        image: "/assets/blog-beach.webp",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Cultural Triangle: A Journey Through History",
        excerpt: "Step back in time and explore the ancient cities of Anuradhapura, Polonnaruwa, and Sigiriya. Uncover the rich history and architectural marvels.",
        category: "Culture",
        date: "Nov 15, 2024",
        image: "/assets/blog-culture.webp",
        readTime: "7 min read"
    },
    {
        id: 3,
        title: "Wildlife Safari: The Big Five of Sri Lanka",
        excerpt: "Embark on a thrilling adventure in Yala and Wilpattu National Parks. Learn about the best times to spot leopards, elephants, and sloth bears.",
        category: "Wildlife",
        date: "Nov 10, 2024",
        image: "/assets/blog-safari.webp",
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "A Foodie's Guide to Sri Lankan Cuisine",
        excerpt: "From spicy curries to sweet treats, explore the diverse flavors of Sri Lanka. Don't miss out on trying Hoppers, Kottu, and fresh seafood.",
        category: "Food & Drink",
        date: "Nov 05, 2024",
        image: "/assets/blog-beach.webp", // Reusing image for demo
        readTime: "4 min read"
    },
    {
        id: 5,
        title: "Hiking Ella Rock: What You Need to Know",
        excerpt: "A complete guide to hiking one of Sri Lanka's most famous trails. Tips on the best time to go, what to pack, and how to get the best views.",
        category: "Adventure",
        date: "Oct 28, 2024",
        image: "/assets/blog-culture.webp", // Reusing image for demo
        readTime: "8 min read"
    },
    {
        id: 6,
        title: "Surfing in Arugam Bay: A Beginner's Guide",
        excerpt: "Catch your first wave at one of the world's best surf spots. We cover surf schools, board rentals, and the best breaks for beginners.",
        category: "Sports",
        date: "Oct 20, 2024",
        image: "/assets/blog-safari.webp", // Reusing image for demo
        readTime: "6 min read"
    }
];

export default function BlogsPage() {
    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Our Travel Journal</h1>
                <p className={styles.subtitle}>
                    Stories, tips, and guides to help you plan your perfect Sri Lankan adventure.
                    Dive into our collection of articles curated by local experts.
                </p>
            </div>

            <div className={styles.grid}>
                {blogPosts.map((post) => (
                    <article key={post.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.category}>{post.category}</span>
                            <h2 className={styles.cardTitle}>{post.title}</h2>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <div className={styles.footer}>
                                <span className={styles.date}>{post.date} • {post.readTime}</span>
                                <span className={styles.readMore}>
                                    Read Article
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
