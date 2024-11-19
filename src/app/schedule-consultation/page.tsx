
import styles from './styles.module.css'
import CalendlyEmbed from '@/components/CalendlyEmbed'

export default function ConsultationPage() {
  // Replace with the static URL you want to use for Calendly
  const calendlyUrl = 'https://calendly.com/cloudplexo/30min';

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Schedule Free Consultation
      </h1>
      <div className={styles.calendly}>
        <CalendlyEmbed url={calendlyUrl} />
      </div>
    </div>
  );
}
