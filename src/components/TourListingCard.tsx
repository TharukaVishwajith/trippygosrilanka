import Image from 'next/image';
import styles from './TourListingCard.module.css';
import { Tour } from '@/data/tours';

interface TourListingCardProps {
    tour: Tour;
}

export default function TourListingCard({ tour }: TourListingCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className={styles.image}
                />
                <div className={styles.durationBadge}>{tour.duration}</div>
            </div>
            <div className={styles.content}>
                <div className={styles.tags}>
                    {tour.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
                <h3 className={styles.title}>{tour.title}</h3>
                <p className={styles.description}>{tour.description}</p>
                <div className={styles.footer}>
                    <div className={styles.price}>
                        <span className={styles.priceLabel}>From</span>
                        <span className={styles.priceValue}>{tour.price}</span>
                    </div>
                    <button className={styles.viewButton}>View Details</button>
                </div>
            </div>
        </div>
    );
}
