import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";
import { Speaker } from "../../arrays/webinarArray";
import Contact from "./contact";

interface PlaceholderCompProps {
  title?: string;
  src: StaticImageData;
  alt: string;
  speakers?: Speaker[];
}

function PlaceholderComp({
  title,
  src,
  alt,
  speakers = [],
}: PlaceholderCompProps) {
  return (
    <section className={styles.placeholderPage}>
      <h1>{title}</h1>

      <div className={styles.placeholder}>
        <div>
          <Image priority src={src} alt={alt} />
          <h2>About The Webinar</h2>
          <p>
            This conference will help you overcome critical challenges -
            reducing latency, building quality infrastructure, and decreasing
            costs - with real-time data processing. Learn from key players in
            the Cloud ecosystem and build partnerships that will drive edge to
            the next level.
          </p>
        </div>

        <Contact />
      </div>

      {speakers.length > 0 && (
        <div className={styles.authorsSection}>
          <h2>Guest Speakers</h2>

          <div className={styles.authors}>
            {speakers.map((speaker, i) => (
              <div key={i}>
                <Image src={speaker.image} alt="Guest Speakers" />
                <h3>{speaker.name}</h3>
                <p>{speaker.jobTitle}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default PlaceholderComp;
