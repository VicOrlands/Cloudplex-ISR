import styles from "./styles.module.css"
import Image, { StaticImageData } from "next/image";

import techbadge from "@/assets/landing/badges/techbadge.png";
import Badge11 from "@/assets/landing/badges/g8.png";
import Badge10 from "@/assets/landing/badges/badge.webp";
import Badge3 from "@/assets/landing/badges/AWS-badge-lambda.png";
import Badge4 from "@/assets/landing/badges/AWS-dynamo-Badge.png";
import Badge5 from "@/assets/landing/badges/WAFR-Partner-Badge.png";
import Badge13 from "@/assets/landing/badges/qualified software.png";
import Badge12 from "@/assets/landing/badges/public sector badge.png";
import Badge7 from "@/assets/landing/badges/aws config delivery.webp";
import Badge6 from "@/assets/landing/badges/amazonrdsserviceready.png";
import consultingbadge from "@/assets/landing/badges/AWS-Consulting-Partner-Badge 1.png";
import Badge1 from "@/assets/landing/badges/AWS-Badge AWS API Gateway.png";
import Badge8 from "@/assets/landing/badges/aws systems manager delivery.webp";
import Badge14 from "@/assets/landing/badges/aws transfer family delivery badge.webp";
import Badge2 from "@/assets/landing/badges/AWS-Badge Amazon CloudFront Delivery.png";
import Badge9 from "@/assets/landing/badges/aws-partner-immersion-day-program-v1.png";

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
                            src={consultingbadge}
                            alt="AWS Partnership and Certified Engineers"
                        />
                    </div>
                    <div>
                        <Image
                            src={techbadge}
                            alt="AWS Partnership and Certified Engineers"
                        />
                    </div>
                </div>

                <div className={styles.otherBadges}>
                    {badgesArray.map((badge, index) => (
                        <div key={index}>
                            <Image
                                src={badge}
                                alt="AWS Partnership and Certified Engineers"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Badges;
