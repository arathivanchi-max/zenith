import styles from './page.module.css';
import BentoDashboard from './BentoDashboard';
import AmbientGlow from './AmbientGlow';
import { globalMeta, socialLinks } from '../config/portfolio';

export default function Home() {
  return (
    <div className={styles.container}>
      <AmbientGlow />

      <main style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <BentoDashboard />
      </main>

      <footer className={styles.footer} style={{ marginTop: 0 }}>
        <p>&copy; {new Date().getFullYear()} {globalMeta.name} &bull; Next.js & React</p>
        <a 
          href={socialLinks.linkedin || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.footerEmail}
        >
          Connect on LinkedIn
        </a>
      </footer>
    </div>
  );
}
