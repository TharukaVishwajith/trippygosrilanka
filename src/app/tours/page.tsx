"use client";

import { useState, useMemo } from 'react';
import styles from './page.module.css';
import TourListingCard from '@/components/TourListingCard';
import TourFilter from '@/components/TourFilter';
import { toursData, allTags } from '@/data/tours';

export default function ToursPage() {
    const [filteredTags, setFilteredTags] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleFilterChange = (tags: string[], query: string) => {
        setFilteredTags(tags);
        setSearchQuery(query);
    };

    const displayedTours = useMemo(() => {
        return toursData.filter(tour => {
            const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tour.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTags = filteredTags.length === 0 || filteredTags.every(tag => tour.tags.includes(tag));

            return matchesSearch && matchesTags;
        });
    }, [searchQuery, filteredTags]);

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1 className={styles.title}>Private & Flexible Tours</h1>
                <p className={styles.subtitle}>Curated experiences designed just for you.</p>
            </div>

            <div className={styles.container}>
                <TourFilter tags={allTags} onFilterChange={handleFilterChange} />

                <div className={styles.grid}>
                    {displayedTours.length > 0 ? (
                        displayedTours.map(tour => (
                            <TourListingCard key={tour.id} tour={tour} />
                        ))
                    ) : (
                        <div className={styles.noResults}>
                            <p>No tours found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
