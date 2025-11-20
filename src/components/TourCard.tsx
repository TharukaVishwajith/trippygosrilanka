import Image from 'next/image';
import styles from './TourCard.module.css';

interface TourCardProps {
    title: string;
    description: string;
    imageSrc: string;
    buttonText: string;
    icon?: React.ReactNode;
}

export default function TourCard({ title, description, imageSrc, buttonText, icon }: TourCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <button className={styles.button}>{buttonText}</button>
        </div>
    );
}
