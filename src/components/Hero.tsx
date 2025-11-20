import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>Discover the Heart of Sri Lanka</h1>
                <p className={styles.subtitle}>Unforgettable journeys, curated for you. Your adventure begins here.</p>
                <button className={styles.ctaButton}>Start Your Journey <span className={styles.arrow}>→</span></button>
            </div>
        </section>
    );
}
