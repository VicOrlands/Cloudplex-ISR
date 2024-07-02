import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"

import StribLogo from "@/assets/client/striblogo_large.webp";
import InvestoresPlaceLogo from "@/assets/client/InvestoresPlace.webp";
import DigitalJournalLogo from "@/assets/client/digital-journal-logo.webp";
import FoxNewsOnboardingLogo from "@/assets/client/Fox-News-Onboarding-Logo.webp";
import MarketWatchVectorLogo from "@/assets/client/marketwatch-vector-logo.webp";
import InternationalBusinessTimesLogo from "@/assets/client/International-Business-Times-Logo.webp";

const Clients = () => {
    return (
        <section className={styles.clientsSection}>
            <h2>As Featured In</h2>

            <div className={styles.clientsImages}>
                <div>
                    <Image
                        src={MarketWatchVectorLogo}
                        alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                        width={150}
                        height={150}
                    />
                </div>
                <div
                >
                    <Image
                        src={InvestoresPlaceLogo}
                        alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                        width={150}
                        height={150}
                    />
                </div>
                <div>
                    <Image
                        src={FoxNewsOnboardingLogo}
                        alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                        width={150}
                        height={150}

                    />
                </div>
                <div>
                    <Image
                        src={InternationalBusinessTimesLogo}
                        alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                        width={172}
                        height={50}
                    />
                </div>
                <div>
                    <Image
                        src={StribLogo}
                        alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                        width={150}
                        height={150}
                    />
                </div>
                <div>
                    <Image
                        src={DigitalJournalLogo}
                        alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                        width={150}
                        height={150}
                    />
                </div>
            </div>
            <br />

            <Link href="/press-release">
                Read press releases
            </Link>
        </section>
    );

}

export default Clients;
