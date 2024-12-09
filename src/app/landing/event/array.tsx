import { StaticImageData } from "next/image";

import Nairobi1 from "@/assets/events/slider/1.webp";
import event2 from "@/assets/events/slider/two.webp";
import kigali1 from "@/assets/events/slider/first.webp";
import Transcorp1 from "@/assets/events/slider/transcorp.webp";
import secondSliderImg1 from "@/assets/events/slider/DSC_0144.webp";
import sliderImg1 from "@/assets/events/slider/Immersion image 1.webp";
import thirdSliderImg1 from "@/assets/events/slider/1691070055643.webp";

interface EventProps {
    text: string,
    width: number,
    image: StaticImageData,
}

export const eventSuccessArray: EventProps[] = [
    {
        text: `We were thrilled to co-host & sponsor the BusinessDay Economic Club's "C-Suite Executives Roundtable Dinner." It was an evening of insightful discussions and valuable connections.`,
        image: event2,
        width: 307,
    },
    {
        text: "Nairobi Founders Brunch",
        image: Nairobi1,
        width: 307,
    },
    {
        text: "Unlocking Digital Transformation in Nigeria's Public Sector",
        image: Transcorp1,
        width: 307,
    },
    {
        text: "The Fintechfusion Summit Was an incredible day of insights, innovation, unparalled networking and limitless opportunities.",
        image: secondSliderImg1,
        width: 128,
    },
    {
        text: "",
        image: sliderImg1,
        width: 128,
    },
    {
        text: "",
        image: thirdSliderImg1,
        width: 128,
    },
    {
        text: "",
        image: kigali1,
        width: 128,
    },
];