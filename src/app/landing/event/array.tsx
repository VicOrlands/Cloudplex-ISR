import { StaticImageData } from "next/image";

import awsLogo from "@/assets/events/awsLogo.webp";
import event1 from "@/assets/events/businessDay/one.webp";
import event2 from "@/assets/events/businessDay/two.webp";
import event3 from "@/assets/events/businessDay/three.webp";
import event4 from "@/assets/events/businessDay/four.webp";
import event5 from "@/assets/events/businessDay/five.webp";
import event6 from "@/assets/events/businessDay/six.webp";
import event7 from "@/assets/events/businessDay/seven.webp";
import event8 from "@/assets/events/businessDay/eight.webp";
import event9 from "@/assets/events/businessDay/nine.webp";
import event10 from "@/assets/events/businessDay/ten.webp";
import event11 from "@/assets/events/businessDay/eleven.webp";
import firstSliderLogo from "@/assets/events/logo.webp";
import businessDayLogo from "@/assets/events/Digital-Journal.webp";
import cloudplexoLogo from "@/assets/events/CloudPlexo logo.png";
import sliderImg1 from "@/assets/events/Immersion image 1.webp";
import sliderImg2 from "@/assets/events/Immersion image 2.webp";
import sliderImg3 from "@/assets/events/Immersion image 3.webp";
import sliderImg4 from "@/assets/events/Immersiin image 4.webp";
import secondSliderImg1 from "@/assets/events/DSC_0144.webp";
import secondSliderImg2 from "@/assets/events/DSC_0158.webp";
import secondSliderImg3 from "@/assets/events/DSC_0171.webp";
import secondSliderImg4 from "@/assets/events/DSC_0196.webp";
import secondSliderImg5 from "@/assets/events/DSC_0212.webp";
import thirdSliderImg1 from "@/assets/events/1691070055643.webp";
import thirdSliderImg2 from "@/assets/events/1691070093414.webp";
import kigali1 from "@/assets/events/kigali/first.webp"
import kigali2 from "@/assets/events/kigali/second.webp"
import kigali3 from "@/assets/events/kigali/third.webp"
import kigali4 from "@/assets/events/kigali/fourth.webp"
import kigali5 from "@/assets/events/kigali/fifth.webp"
import kigali6 from "@/assets/events/kigali/sixth.webp"
import kigali7 from "@/assets/events/kigali/seventh.webp"
import Nairobi1 from "@/assets/events/nairobi/1.jpeg"
import Nairobi2 from "@/assets/events/nairobi/2.jpeg"
import Nairobi3 from "@/assets/events/nairobi/3.jpeg"
import Nairobi4 from "@/assets/events/nairobi/4.jpeg"
import Nairobi5 from "@/assets/events/nairobi/5.png"
import Transcorp1 from "@/assets/events/transcorp/1.jpeg"
import Transcorp2 from "@/assets/events/transcorp/2.jpeg"
import Transcorp3 from "@/assets/events/transcorp/3.png"
import Transcorp4 from "@/assets/events/transcorp/4.jpeg"
import Transcorp5 from "@/assets/events/transcorp/5.jpeg"
import Transcorp6 from "@/assets/events/transcorp/6.jpeg"
import Transcorp7 from "@/assets/events/transcorp/7.jpeg"
import Transcorp8 from "@/assets/events/transcorp/8.jpeg"

interface EventProps {
    img: StaticImageData,
    text: string,
    width: number,
    imgText: string,
    imgHeader: boolean,
    images: StaticImageData[],
}

export const eventSuccessArray: EventProps[] = [
    {
        img: businessDayLogo,
        imgHeader: true,
        imgText: `We were thrilled to co-host & sponsor the BusinessDay Economic Club's "C-Suite Executives Roundtable Dinner." It was an evening of insightful discussions and valuable connections.`,
        text: `We were thrilled to co-host & sponsor the BusinessDay Economic Club's "C-Suite Executives Roundtable Dinner." It was an evening of insightful discussions and valuable connections. <br/><br/> Thank you to all who attended and made it a success! <br/><br/>We're excited to see the future collaborations and innovations sparked by this event!`,
        images: [
            event2,
            event1,
            event3,
            event4,
            event5,
            event6,
            event7,
            event8,
            event9,
            event10,
            event11,
        ],
        width: 307,
    },
    {
        img: cloudplexoLogo,
        imgText: "Nairobi Founders Brunch",
        imgHeader: false,
        text: `Join us for Nairobi Founders' Brunch Next Monday!🥂 <a href="https://www.linkedin.com/company/cloudplexo/mycompany/" target="blank">CloudPlexo</a> and <a href="https://www.linkedin.com/company/amazon-web-services/" target="blank">Amazon Web Services (AWS)</a> Startups will be bringing the amazing founders and leaders together to connect, learn, and build with fellow innovators on`,
        images: [
            Nairobi1,
            Nairobi2,
            Nairobi3,
            Nairobi4,
            Nairobi5
        ],
        width: 307,
    },
    {
        img: cloudplexoLogo,
        imgHeader: false,
        imgText: "Unlocking Digital Transformation in Nigeria's Public Sector",
        text: `Thank you to all of our speakers and panelists for their candid contributions and honest discussions. Thank you to our attendees for bringing your energy and ideas. Thank you to our partners for making this possible, and especially to our team for flawless execution.<br/><br/>Together, we're driving Nigeria's digital future!`,
        images: [
            Transcorp1,
            Transcorp2,
            Transcorp3,
            Transcorp4,
            Transcorp5,
            Transcorp6,
            Transcorp7,
            Transcorp8
        ],
        width: 307,
    },
    {
        img: firstSliderLogo,
        imgHeader: true,
        imgText:
            "The Fintechfusion Summit Was an incredible day of insights, innovation, unparalled networking and limitless opportunities.",
        text: `From startups to industry giants, the Fintechfusion Summit had it all. It was a knowledge feast, an incredible day of insights, innovation, unparalled networking and limitless opportunities at the Fintech Summit 2023!`,
        images: [
            secondSliderImg1,
            secondSliderImg2,
            secondSliderImg3,
            secondSliderImg4,
            secondSliderImg5,
        ],
        width: 128,
    },
    {
        img: awsLogo,
        imgText: "",
        imgHeader: false,
        text: `Just concluded an enriching AWS Immersion Day with the GT Pension Manager's team, and immense appreciation to the AWS team <a href="https://www.linkedin.com/in/kayode-ranger/">Kayode A. Akomolafe (Tech Ranger)</a>, <a href="https://www.linkedin.com/in/ousintkd/">Ousseynou khadim BEYE</a>, <a href="https://www.linkedin.com/in/onaopemipo-osunyomi-45a73244/">Onaopemipo Osunyomi</a>, and <a href="https://www.linkedin.com/in/eberenkoro/">Ebere Nkoro</a> for their invaluable insights and guidance!`,
        images: [sliderImg1, sliderImg2, sliderImg3, sliderImg4],
        width: 128,
    },
    {
        img: awsLogo,
        imgText: "",
        imgHeader: false,
        text: `Heartfelt appreciation to the incredible members of the AWS team <a href="https://www.linkedin.com/in/eberenkoro/">Ebere Nkoro</a> and <a href="https://www.linkedin.com/in/osaretin-j-63692093/">Osaretin J</a> for their unparalleled support and seamless organisation, which contributed immensely to the success of this event.`,
        images: [thirdSliderImg1, thirdSliderImg2],
        width: 128,
    },
    {
        img: awsLogo,
        imgText: "",
        imgHeader: false,
        text: `Kigali Mixer Event. Watch a recap of the event <a href="https://cloudplexo.com/Kigali-mixer.mp4">here</a>`,
        images: [
            kigali1,
            kigali2,
            kigali3,
            kigali4,
            kigali5,
            kigali6,
            kigali7,
        ],
        width: 128,
    },
];