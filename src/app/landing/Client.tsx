import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"

import logo from "@/assets/landing/gtco.webp";
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
                        loading="lazy"
                        priority={false}
                        src={MarketWatchVectorLogo}
                        alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                        width={150}
                        height={150}
                    />
                </div>
                <div
                >
                    <Image
                        loading="lazy"
                        priority={false}
                        src={InvestoresPlaceLogo}
                        alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                        width={150}
                        height={150}
                    />
                </div>
                <div>
                    <Image
                        loading="lazy"
                        priority={false}
                        src={FoxNewsOnboardingLogo}
                        alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                        width={150}
                        height={150}

                    />
                </div>
                <div>
                    <Image
                        loading="lazy"
                        priority={false}
                        src={InternationalBusinessTimesLogo}
                        alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                        width={172}
                        height={50}
                    />
                </div>
                <div>
                    <Image
                        loading="lazy"
                        priority={false}
                        src={StribLogo}
                        alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                        width={150}
                        height={150}
                    />
                </div>
                <div>
                    <Image
                        loading="lazy"
                        priority={false}
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

            <section className={styles.gtcoSection}>
                <div>
                    <h2>Leading Nigeria's FSI Revolution</h2>
                    <p>
                        CloudPlexo, an advanced AWS partner, is the first to leverage 100%
                        AWS Lagos local zone for data residency requirement to spearhead the
                        shift of GTCO Pensions to the AWS Cloud.
                    </p>
                </div>

                <div>
                    <Image
                        loading="lazy"
                        src={logo}
                        alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                        priority={false}
                        placeholder="blur"
                    />
                </div>
            </section>
        </section>
    );

}

export default Clients;
