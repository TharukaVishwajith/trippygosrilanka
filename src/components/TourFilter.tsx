"use client";

import { useState, useEffect } from 'react';
import styles from './TourFilter.module.css';

interface TourFilterProps {
    tags: string[];
    onFilterChange: (selectedTags: string[], searchQuery: string) => void;
}

export default function TourFilter({ tags, onFilterChange }: TourFilterProps) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleTagClick = (tag: string) => {
        const newTags = selectedTags.includes(tag)
            ? selectedTags.filter(t => t !== tag)
            : [...selectedTags, tag];
        setSelectedTags(newTags);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        onFilterChange(selectedTags, searchQuery);
    }, [selectedTags, searchQuery, onFilterChange]);

    return (
        <div className={styles.filterContainer}>
            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    placeholder="Search tours..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
                <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>

            <div className={styles.tagsWrapper}>
                <span className={styles.filterLabel}>Filter by:</span>
                <div className={styles.tagsList}>
                    {tags.map(tag => (
                        <button
                            key={tag}
                            className={`${styles.tagButton} ${selectedTags.includes(tag) ? styles.active : ''}`}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
