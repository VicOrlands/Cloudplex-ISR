import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { reviews } from "./caseArray";
import extraStyles from "../landing/testimonial/testimonial.module.css"
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";
import clsx from "clsx";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Slide: React.FC = () => {
    const [sliderRef, setSliderRef] = useState<Slider | null>(null);

    const videosettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={extraStyles.reviewVideo}>
            <Slider ref={setSliderRef} {...videosettings}>
                {reviews.map((cases, index) => (
                    <div className={extraStyles.videoWrap} key={index}>
                        <div className={extraStyles.imageWrap}>
                            <VideoPlayer
                                src={cases.link}
                                poster={cases.image.src}
                            />
                        </div>
                        <div className={extraStyles.contentWrap}>
                            <Image
                                src={cases.logo}
                                className={extraStyles.logoImage}
                                alt="Top Cloud Services providers with CloudPlexo's Innovative Solutions reviews"
                            />

                            <h3>{cases.quote}</h3>
                            <Link href={cases.caselink}>Read case study</Link>
                            <h4>{cases.speaker}</h4>
                            <h6>{cases.company}</h6>
                        </div>
                        <section className={clsx(extraStyles.btngroup, extraStyles.mobile)}>
                            <button
                                type="button"
                                aria-label="Arrow pointing left"
                                onClick={sliderRef?.slickPrev}
                            >
                                <MdOutlineKeyboardArrowLeft />
                            </button>
                            <button
                                type="button"
                                aria-label="Arrow pointing right"
                                onClick={sliderRef?.slickNext}
                            >
                                <MdOutlineKeyboardArrowRight />
                            </button>
                        </section>
                    </div>
                ))}
            </Slider>
            <section className={clsx(extraStyles.btngroup, extraStyles.desktop)}>
                <button
                    type="button"
                    aria-label="Arrow pointing left"
                    onClick={sliderRef?.slickPrev}
                >
                    <MdOutlineKeyboardArrowLeft />
                </button>
                <button
                    type="button"
                    aria-label="Arrow pointing right"
                    onClick={sliderRef?.slickNext}
                >
                    <MdOutlineKeyboardArrowRight />
                </button>
            </section>
        </div>
    );
}

export default Slide;
