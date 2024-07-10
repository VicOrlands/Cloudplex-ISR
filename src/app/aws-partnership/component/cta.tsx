import styles from "./cta.module.css";
import { ButtonLink } from "@/components/button/Button";
import BgImg from "@/assets/aws_partnership/call-to-action.png"
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";

export function AwsCTA() {
    return (
        <LazyBackgroundImage src={BgImg} className={styles["ctaSectionBg"]}>
            <div className={styles["call-to-action"]}>
                <div>
                    <h3>
                        Embrace the future of computing with our expert cloud solutions.
                    </h3>
                    <ButtonLink link={"/contact-us"} title="Get in touch" className="" />
                </div>
            </div>
        </LazyBackgroundImage>
    )
}