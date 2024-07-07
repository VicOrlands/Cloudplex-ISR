import styles from "./styles.module.css"
import Image, { StaticImageData } from "next/image";

import techbadge from "@/assets/landing/badges/techbadge.webp";
import Badge11 from "@/assets/landing/badges/g8.webp";
import Badge10 from "@/assets/landing/badges/badge.webp";
import Badge3 from "@/assets/landing/badges/AWS-badge-lambda.webp";
import Badge4 from "@/assets/landing/badges/AWS-dynamo-Badge.webp";
import Badge5 from "@/assets/landing/badges/WAFR-Partner-Badge.webp";
import Badge13 from "@/assets/landing/badges/qualified software.webp";
import Badge12 from "@/assets/landing/badges/public sector badge.webp";
import Badge7 from "@/assets/landing/badges/aws config delivery.webp";
import Badge6 from "@/assets/landing/badges/amazonrdsserviceready.webp";
import consultingbadge from "@/assets/landing/badges/AWS-Consulting-Partner-Badge 1.webp";
import Badge1 from "@/assets/landing/badges/AWS-Badge AWS API Gateway.webp";
import Badge8 from "@/assets/landing/badges/aws systems manager delivery.webp";
import Badge14 from "@/assets/landing/badges/aws transfer family delivery badge.webp";
import Badge2 from "@/assets/landing/badges/AWS-Badge Amazon CloudFront Delivery.webp";
import Badge9 from "@/assets/landing/badges/aws-partner-immersion-day-program-v1.webp";

const badgesArray: StaticImageData[] = [
    Badge14,
    Badge11,
    Badge6,
    Badge1,
    Badge5,
    Badge4,
    Badge13,
    Badge12,
    Badge2,
    Badge3,
    Badge9,
    Badge7,
    Badge8,
    Badge4,
    Badge10,
];

function Badges() {
    return (
        <div className={styles.badgesContainer}>
            <h2>AWS Partnership and Certified Engineers</h2>

            <section>
                <div className={styles.partnerBadges}>
                    <div>
                        <Image
                            loading="lazy"
                            src={consultingbadge}
                            alt="AWS Partnership and Certified Engineers"
                            height={consultingbadge.height}
                            width={consultingbadge.width}
                        />
                    </div>
                    <div>
                        <Image
                            loading="lazy"
                            src={techbadge}
                            alt="AWS Partnership and Certified Engineers"
                            height={techbadge.height}
                            width={techbadge.width}
                        />
                    </div>
                </div>

                <div className={styles.otherBadges}>
                    {badgesArray.map((badge, index) => (
                        <div key={index}>
                            <Image
                                loading="lazy"
                                src={badge}
                                alt="AWS Partnership and Certified Engineers"
                                height={badge.height}
                                width={badge.width}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Badges;
