import Hero from "@/components/Hero";
import TourCard from "@/components/TourCard";
import BlogSection from "@/components/BlogSection";
import styles from "./page.module.css";

// Icons
const PrivateIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const GroupIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      <section className={styles.cardsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Choose Your Way to Explore Sri Lanka</h2>
          <p className={styles.sectionSubtitle}>Whether you crave a personalized adventure or the camaraderie of a group, we have the perfect tour for you.</p>
        </div>

        <div className={styles.grid}>
          <TourCard
            title="Private & Flexible Tours"
            description="Your trip, your dates, perfect for couples, families, and friends who want private and flexibility."
            buttonText="Explore Private Tours"
            icon={<PrivateIcon />}
          />
          <TourCard
            title="Group Tours"
            description="Fixed date adventures where you can meet fellow travelers and share amazing experiences."
            buttonText="Join Group Tour"
            icon={<GroupIcon />}
          />
        </div>
      </section>

      <BlogSection />

      <footer className={styles.footer}>
        <p>&copy; 2024 TrippyGo Sri Lanka. All rights reserved.</p>
      </footer>
    </main>
  );
}
