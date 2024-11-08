import Link from 'next/link';
import styles from './cta.module.css'

const FooterCTA: React.FC = () => {
    return (
        <section className={styles.footerCta}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <h2>Modern Cloud, Smarter Business – Let’s Make It Happen Together.</h2>
                    <p>From process upgrades to security, we’re here to make every step easier and safer. Let’s make the cloud work smarter for your success.”</p>
                    <Link href="/" >
                        <button type='button'>Modernize & Secure your processes</button>
                    </Link>
                </div>
            </div>
        </section>
    );

}

export default FooterCTA;
