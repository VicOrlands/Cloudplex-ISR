"use client"

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
import { useInView } from "react-intersection-observer";

const images = [{
    src: MarketWatchVectorLogo,
    width: 150,
    height: 150
},
{
    src: InvestoresPlaceLogo,
    width: 150,
    height: 150
},
{
    src: FoxNewsOnboardingLogo,
    width: 150,
    height: 150
},
{
    src: InternationalBusinessTimesLogo,
    width: 172,
    height: 50
},
{
    src: StribLogo,
    width: 150,
    height: 150
},
{
    src: DigitalJournalLogo,
    width: 150,
    height: 150
}]

const Clients = () => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className={styles.clientsSection} ref={ref}>
            <h2>As Featured In</h2>

            {inView &&
                <>
                    <div className={styles.clientsImages}>
                        {images.map((img) => (
                            <div>
                                <Image
                                    loading="lazy"
                                    priority={false}
                                    src={img.src}
                                    alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions"
                                    width={img.width}
                                    height={img.height}
                                />
                            </div>
                        ))}
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
                </>
            }
        </section>
    );

}

export default Clients;
