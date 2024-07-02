import React from "react";
import styles from "./styles.module.css"
import Marquee from "react-fast-marquee";
import Image, { StaticImageData } from "next/image";

import img1 from "@/assets/partners/one.webp";
import img2 from "@/assets/partners/inttix.webp";
import img3 from "@/assets/partners/bp.webp";
import img4 from "@/assets/partners/cerberus.webp";
import img5 from "@/assets/partners/geria.webp";
import img6 from "@/assets/partners/Accenture.webp";
import img7 from "@/assets/partners/mediaagility.webp";
import img8 from "@/assets/partners/liveli.webp";
import img9 from "@/assets/partners/aws.webp";
import img10 from "@/assets/partners/asml.webp";
import img11 from "@/assets/partners/sophos.webp";
import img12 from "@/assets/partners/government.webp";
import img13 from "@/assets/partners/GTCO_logo.webp";
import img14 from "@/assets/partners/BR_logo.webp";
import img15 from "@/assets/partners/MaxFiles-logo.webp";
import img16 from "@/assets/partners/convexity.webp";
import img17 from "@/assets/partners/phastpay.webp";
import img18 from "@/assets/partners/Ican.webp";
import img19 from "@/assets/partners/checkpoint.webp";
import img20 from "@/assets/partners/bitbarter.webp";
import img21 from "@/assets/partners/bitsave.webp";
import img22 from "@/assets/partners/clinton.webp";
import img23 from "@/assets/partners/Crypto-Smart.webp";
import img24 from "@/assets/partners/Dukia.webp";
import img25 from "@/assets/partners/ideyFind.webp";
import img26 from "@/assets/partners/Kobo-logo.webp";
import img27 from "@/assets/partners/qpay.webp";
import img28 from "@/assets/partners/silicon_africa.webp";
import img29 from "@/assets/partners/staycon.webp";
import img30 from "@/assets/partners/Talent sync.webp";
import img31 from "@/assets/partners/varscon.webp";
import img32 from "@/assets/partners/venco.webp";
import img33 from "@/assets/partners/GCP.webp";

interface ImageData {
    src: StaticImageData;
    width: number;
    height: number;
}

const images: ImageData[] = [
    { src: img1, height: 50, width: 228 },
    { src: img2, height: 50, width: 128 },
    { src: img3, height: 50, width: 37 },
    { src: img4, height: 50, width: 71 },
    { src: img5, height: 50, width: 110 },
    { src: img6, height: 50, width: 187 },
    { src: img7, height: 50, width: 118 },
    { src: img33, height: 50, width: 319 },
    { src: img8, height: 50, width: 50 },
    { src: img9, height: 50, width: 82 },
    { src: img10, height: 50, width: 172 },
    { src: img11, height: 50, width: 75 },
    { src: img12, height: 50, width: 95 },
    { src: img13, height: 50, width: 259 },
    { src: img14, height: 50, width: 94 },
    { src: img15, height: 50, width: 233 },
    { src: img17, height: 50, width: 135 },
    { src: img18, height: 50, width: 143 },
    { src: img19, height: 50, width: 103 },
];

const secondImages = [
    { src: img20, height: 50, width: 199 },
    { src: img16, height: 50, width: 177 },
    { src: img21, height: 50, width: 219 },
    { src: img22, height: 50, width: 94 },
    { src: img23, height: 50, width: 141 },
    { src: img24, height: 50, width: 152 },
    { src: img25, height: 50, width: 50 },
    { src: img26, height: 50, width: 140 },
    { src: img27, height: 50, width: 197 },
    { src: img28, height: 50, width: 50 },
    { src: img29, height: 50, width: 50 },
    { src: img30, height: 50, width: 240 },
    { src: img31, height: 50, width: 50 },
    { src: img32, height: 50, width: 213 },
];

const Partners = () => {
    return (
        <div className={styles.partnersSection}>
            <h2>Our Trusted Partners & Clients</h2>

            <Marquee direction="right" speed={100} delay={5}>
                {images.map((img, index) => (
                    <div className={styles.imageWrapper} key={index}>
                        <Image
                            src={img.src}
                            alt="Our Trusted Partners & Clients logo"
                            width={img.width}
                            height={img.height}
                        />
                    </div>
                )
                )}
            </Marquee>

            <Marquee direction="right" speed={100} delay={5}>
                {secondImages.map((img, index) => (
                    <div className={styles.imageWrapper} key={index}>
                        <Image
                            src={img.src}
                            alt="Our Trusted Partners & Clients logo"
                            width={img.width}
                            height={img.height}
                        />
                    </div>
                )
                )}
            </Marquee>
        </div>
    );
};

export default Partners;
