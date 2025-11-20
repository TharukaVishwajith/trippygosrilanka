import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogSection.module.css';

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
        image: "/assets/blog-beach.png",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Cultural Triangle: A Journey Through History",
        excerpt: "Step back in time and explore the ancient cities of Anuradhapura, Polonnaruwa, and Sigiriya. Uncover the rich history and architectural marvels.",
        category: "Culture",
        date: "Nov 15, 2024",
        image: "/assets/blog-culture.png",
        readTime: "7 min read"
    },
    {
        id: 3,
        title: "Wildlife Safari: The Big Five of Sri Lanka",
        excerpt: "Embark on a thrilling adventure in Yala and Wilpattu National Parks. Learn about the best times to spot leopards, elephants, and sloth bears.",
        category: "Wildlife",
        date: "Nov 10, 2024",
        image: "/assets/blog-safari.png",
        readTime: "6 min read"
    }
];

const BlogSection = () => {
    return (
        <section className={styles.section} id="blogs">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Latest Travel Stories</h2>
                    <p className={styles.subtitle}>
                        Get inspired by our travel guides, tips, and stories from across the island.
                        Plan your perfect getaway with our expert insights.
                    </p>
                </div>

                <div className={styles.grid}>
                    {blogPosts.map((post) => (
                        <article key={post.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={400}
                                    height={300}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.category}>{post.category}</span>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
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

                <div className={styles.viewAllContainer}>
                    <Link href="/blogs" className={styles.viewAllButton}>
                        View All Blogs
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
