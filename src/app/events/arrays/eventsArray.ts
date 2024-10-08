import { StaticImageData } from "next/image";

import Nairobi from "@/assets/events/nairobi.webp";
import fintech from "@/assets/events/DSC_0144.webp";
import founders from "@/assets/events/founders.webp";
import Kigali from "@/assets/events/kigali_event.webp";
import businessDay from "@/assets/events/businessDay/seven.webp";
import GenerativeAI from "@/assets/events/1691070093414.webp";
import Immersion from "@/assets/events/Immersion image 1.webp";
import GenAI from "@/assets/events/GenerativeAI.webp";
import PublicSector from "@/assets/events/public sector strategic engagement.webp";
import AmazonQ from "@/assets/events/amazoq advantage.webp";
import Brunch from "@/assets/events/Nairobi Founders Brunch.webp";
import AccraConnect from "@/assets/events/tech connect.webp";
import OwerriEvent from "@/assets/events/owerri_founders_mixer.webp";
import digitalThumbnail from "@/assets/events/transcorp/videothumbnail.webp";

import {
  businessDayImages,
  digitalImages,
  fintechFusionImages,
  generativeAiImages,
  immersionDaymages,
  kigaliImages,
  nairobiImages,
  techSafariImages,
} from "./imagesArray";

export interface EventsProps {
  img: StaticImageData;
  title: string;
  text: string;
  link: string;
  date: string;
  linkText: string;
  imgRightText: string;
  eventLocation?: string;
  eventDescription: string | TrustedHTML;
  about?: string | TrustedHTML | undefined;
  eventImages: StaticImageData[];
  guestSpeakers?: string;
  videoLink?: string;
  videoThumbnail?: StaticImageData;
}

export const EventsArray: EventsProps[] = [
  {
    img: OwerriEvent,
    title: "Founders’ Mixer",
    text: `Are you a tech entrepreneur looking to expand your network and connect with like-minded individuals? Look no further! We're thrilled to announce the SMFEST Founders' Mixer, a unique opportunity to meet fellow founders, explore potential partnerships, and gain valuable insights from industry leaders.`,
    link: "https://lu.ma/xkx3fdtg",
    date: "18th October 2024 Accra, Protea Hotel Owerri",
    linkText: "Register",
    imgRightText: "5PM WAT",
    eventImages: [],
    eventDescription: "",
  },
  {
    img: AccraConnect,
    title: "Tech Connect Accra",
    text: `This Tech Ecosystem Mixer is a unique gathering designed to bring together key players from Ghana’s fast-growing tech ecosystem, including founders, operators, investors, and ecosystem builders. It will serve as a platform for discussions around collaboration, innovation, and business expansion within the region.`,
    link: "https://lu.ma/bzlis1e6",
    date: "Wednesday, October 2nd",
    linkText: "Register",
    imgRightText: "4:00 PM - 9:00 PM GMT",
    eventImages: [],
    eventDescription: "",
  },
  {
    img: AmazonQ,
    title: "The Amazon Q Advantage",
    text: `Join us for our upcoming workshop, "The Amazon Q Advantage," and learn how to harness the power of generative AI without compromising your data security.`,
    link: "https://bit.ly/qadvantage24",
    date: "October 3rd & 4th, 2024",
    linkText: "Register",
    imgRightText: "11:00 AM (GMT+1)",
    eventImages: [],
    eventDescription: "",
    guestSpeakers: "Lucky Sharma, Prankit Gupta",
  },
  {
    img: PublicSector,
    title: "Unlocking Digital Transformation in Nigeria's Public Sector ",
    text: `The event kicked off with a warm welcome from Cloudplexo, followed by insightful keynote speeches from Mr. Kashifu Abdullahi, represented by Mr. Oladejo Olawwumi - Director of IT Infrastructure Solutions  and Prof. Ibrahim A. Adeyanju. Their presentations highlighted the transformative potential of cloud technology and its role in enhancing efficiency, transparency, and service delivery within government agencies.`,
    link: "unlocking-digital-transformation-in-nigeria-public-sector",
    date: "September 17th, 2024",
    linkText: "View info",
    imgRightText: "2pm (WAT)",
    eventLocation: "Transcorp Hilton",
    eventDescription: `We're still thinking about the incredible conversations at the
              Public Sector Strategic Engagement. <br />
              <br />
              <br /> Great insights were shared on leveraging cloud technology
              to drive efficiency and innovation in the public sector. <br />
              <br />
              <br />
              Once again, many thanks to all our amazing speakers, panelists,
              and attendees for all your awesome contributions. <br />
              <br />
              <br /> Cheers to our fantastic team and partners who made this
              happen! <br />
              <br />
              <br /> We’re looking forward to the next wave of digital
              transformation across the public sector.`,
    about: ` <p>
          The event kicked off with a warm welcome from Cloudplexo, followed by
          insightful keynote speeches from Mr. Kashifu Abdullahi, represented by
          Mr. Oladejo Olawwumi - Director of IT Infrastructure Solutions  and
          Prof. Ibrahim A. Adeyanju. Their presentations highlighted the
          transformative potential of cloud technology and its role in enhancing
          efficiency, transparency, and service delivery within government
          agencies.
        </p>
        <p>
          A highlight of the event was the keynote speech by Mr. Ibidapo
          Odujukan, the Executive Director of Finance and Corporate Services at
          the Federal Mortgage Bank of Nigeria. In his presentation titled "The
          Power of Cloud Innovation," Mr. Odujukan emphasized the importance of
          embracing cloud technology to drive innovation and improve public
          services.
        </p>
        <p>
          Additionally, David Ekefre, the Director of Business at CloudPlexo,
          delivered a brief address on "Addressing data residency across public
          sector agencies," highlighting the company's solutions for ensuring
          compliance with data localization regulations. The subsequent panel
          discussion, moderated by Spiff Moses, featured a diverse group of
          experts who shared their perspectives on the challenges and
          opportunities facing digital transformation in the public sector.
          Muhammad Salame, Lanre Yusuf, and Chigozie Ezugwu offered valuable
          insights and practical advice on how to overcome obstacles and
          leverage technology to achieve positive outcomes.
        </p>
        <p>
          Throughout the event, attendees had the opportunity to network with
          peers, exchange ideas, and explore potential collaborations. A
          delicious buffet was provided, offering a variety of food and drinks
          to fuel the discussions and foster a relaxed atmosphere. The ample
          refreshments and networking opportunities contributed to a memorable
          experience for all participants.
        </p>`,
    eventImages: digitalImages,
    videoLink: "https://cloudplexo.com/cloudplexo-public-sector-2024.mp4",
    videoThumbnail: digitalThumbnail,
    guestSpeakers:
      "NTDA Nigeria, Nnena Irebisi, Samuel Njeka, Techspecialist Consulting Limited, Startup Abuja, FEDERAL MORTGAGE BANK OF NIGERIA (FMBN), Galaxy Backbone",
  },
  {
    img: Brunch,
    title: "Nairobi Founders Brunch",
    text: `Join us for Nairobi Founders' Brunch Next Monday!🥂 <a href="https://www.linkedin.com/company/cloudplexo/mycompany/" target="blank">CloudPlexo</a> and <a href="https://www.linkedin.com/company/amazon-web-services/" target="blank">Amazon Web Services (AWS)</a> Startups will be bringing the amazing founders and leaders together to connect, learn, and build with fellow innovators on`,
    link: "nairobi-founders-brunch",
    date: "Monday 9th September, 2024",
    linkText: "View info",
    imgRightText: "1pm",
    eventLocation: "",
    eventDescription: `We had an amazing time connecting with dynamic entrepreneurs, startup enthusiasts, and key ecosystem builders who are pushing boundaries in the tech space. The lively atmosphere set the stage for insightful conversations, collaboration opportunities, and plenty of laughter. Everyone enjoyed a delicious brunch, all while discussing game-changing innovations and ideas that are shaping the future of Nairobi’s entrepreneurial landscape.
    <br /><br /><br />We’re incredibly grateful to all the attendees for making this gathering so special. Your enthusiasm and energy truly brought the event to life!`,
    eventImages: nairobiImages,
  },
  {
    img: GenAI,
    title: "August Gen-AI Fridays: Getting started on Amazon Bedrock",
    text: `Discover the potential of generative AI with Amazon Bedrock. Our in-depth workshop will equip you with the knowledge and skills to harness the power of this cutting-edge technology.`,
    link: "https://www.linkedin.com/events/7226214750320246784/comments/",
    date: "Every Friday of August",
    linkText: "View info",
    imgRightText: "August Gen-AI",
    eventImages: [],
    eventDescription: "",
  },
  {
    img: Nairobi,
    title: "Tech Safari Nairobi Mixer",
    text: `We're hosting our Tech Safari Mixer in Nairobi 🎉Hosted by Tech Safari, along with AWS Startups, CloudPlexo and Infobip for founders, investors, ecosystem players and tech-curious. ​Early bird tickets are on sale and if you prefer to pay with MPesa, click here. ​You will be added to the event page when you make the payment. ​If you need help or have questions, reach out to Daniel (daniel [at] techsafari.io).`,
    link: "tech-safari-nairobi-mixer",
    date: "4th July, 2024",
    linkText: "View info",
    imgRightText: "Tech Safari Nairobi Mixer",
    eventImages: techSafariImages,
    eventDescription:
      "We hosted our Tech Safari Mixer in Nairobi 🎉. Hosted by Tech SafariguestSpeakers, along with AWS Startups, CloudPlexo, and Infobip, it brought together founders, investors, ecosystem players, and the tech-curious.",
  },
  {
    img: Kigali,
    title: "KIGALI CTO & Founders Mixer",
    text: `Call out to Founders in Kigali, Rwanda! 🚀Looking to connect with fellow CTOs, founders, and industry experts? Join us at CTO & Founders Mixer on Friday 21st June by 4pm CAT for an evening of networking, insights, and collaboration as we bring together top minds in the industry. Gain valuable knowledge to propel your ventures forward in the dynamic world of Amazon Web Services (AWS).Don't miss out on this opportunity to share experiences and connect with like-minded individuals.`,
    link: "kigali-cto-and-founders-mixer",
    date: "21st June, 2024",
    linkText: "View info",
    imgRightText: "KIGALI CTO & Founders Mixer",
    eventImages: kigaliImages,
    videoLink: "https://cloudplexo.com/Kigali-mixer.mp4",
    eventDescription: `On Friday, June 21st at 4pm CAT, we proudly hosted the CTO & Founders Mixer, a gathering designed to foster networking, insights, and collaboration.<br /><br /><br />Bringing together some of the brightest minds in the industry, the event offered attendees a chance to exchange valuable knowledge and strategies to drive their ventures forward in the ever-evolving world of Amazon Web Services (AWS). From insightful conversations on cloud innovation to sharing personal experiences, the mixer created a dynamic environment for founders and CTOs to connect with like-minded professionals, sparking new ideas and potential partnerships.<br /><br /><br />A huge thank you to everyone who participated in making the evening such a success. We’re excited to see the impact of the collaborations and knowledge shared at this inspiring event!`,
  },
  {
    img: businessDay,
    title: "Business Day Event",
    text: `We were thrilled to co-host & sponsor the BusinessDay Economic Club's "C-Suite Executives Roundtable Dinner." It was an evening of insightful discussions and valuable connections.Thank you to all who attended and made it a success!We're excited to see the future collaborations and innovations sparked by this event!`,
    link: "business-day-event",
    date: "7th June, 2024",
    linkText: "View info",
    imgRightText: "Business Day Event",
    eventImages: businessDayImages,
    videoLink: "https://cloudplexo.com/cloudplexo_businessday_event_2024.mp4",
    eventDescription: `We were honored to co-host and sponsor the BusinessDay Economic Club’s “C-Suite Executives Roundtable Dinner,” and what an extraordinary evening it was!<br /><br /><br />The event brought together top executives and thought leaders for a night of thought-provoking discussions on the most pressing economic issues and future business strategies. The atmosphere was filled with energy as attendees exchanged insights, explored collaboration opportunities, and built meaningful connections that will undoubtedly drive new innovations.<br /><br /><br />A heartfelt thank you to everyone who joined us and contributed to the success of the evening. We’re excited to witness the future partnerships and groundbreaking ideas that will emerge from the connections made at this event!`,
  },
  {
    img: founders,
    title: "CTO’s & Founders Mixer",
    text: `The energy was electric as attendees soaked in the insightful discussions and invaluable connections made. From groundbreaking tech insights to entrepreneurial wisdom, the mixer catalyzes innovation and collaboration.`,
    link: "ctos-and-founders-mixer",
    date: "22 April, 2024",
    linkText: "View info",
    imgRightText: "CTO’s & Founders Mixer",
    eventImages: [founders],
    eventDescription: "",
  },
  {
    img: fintech,
    title: "Fintech Fusion Submit",
    text: `From startups to industry giants, the Fintechfusion Summit had it all. It was a knowledge feast, an incredible day of insights, innovation, unparalled networking and limitless opportunities at the Fintech Summit 2023!`,
    link: "fintech-fusion-summit",
    date: "2nd November, 2023",
    linkText: "View info",
    imgRightText: "Fintech Fusion Submit",
    eventImages: fintechFusionImages,
    eventDescription: `We had the most fun hanging out with incredible founders, investors, and techies at our FinTechFusion Summit Post-Event Mixer on Thursday.<br /><br /><br />Shout out to our world-class sponsors; WENDU, AWS, & iLEARN Cloud - who made this possible!<br /><br /><br />And we're just warming up. Want to come through or be involved in our next one? <br /><br /><br />Let’s stay connected then!`,
  },
  {
    img: Immersion,
    title: "AWS Immersion Day",
    text: `🚀 Just concluded an enriching AWS Immersion Day with the GT Pension Manager's team, and immense appreciation to the AWS team <a target="blank" href="https://www.linkedin.com/in/kayode-ranger/">Kayode A. Akomolafe (Tech Ranger)</a>, <a target="blank" href="https://www.linkedin.com/in/ousintkd/">Ousseynou khadim BEYE</a>, <a href="https://www.linkedin.com/in/onaopemipo-osunyomi-45a73244/" target="blank">Onaopemipo Osunyomi</a>, and <a href="https://www.linkedin.com/in/eberenkoro"/>Ebere Nkoro</a> for their invaluable insights and guidance! 💡`,
    link: "aws-immersion-day",
    date: "",
    linkText: "View info",
    imgRightText: "AWS Immersion Day",
    eventImages: immersionDaymages,
    eventDescription: "",
  },
  {
    img: GenerativeAI,
    title: "Generative AI",
    text: `Heartfelt appreciation to the incredible members of the AWS team <a target="blank" href="https://www.linkedin.com/in/eberenkoro/">Ebere Nkoro</a> and <a target="blank" href="https://www.linkedin.com/in/osaretin-j-63692093/">Osaretin J</a> for their unparalleled support and seamless organisation, which contributed immensely to the success of this event.`,
    link: "generative-ai",
    date: "",
    linkText: "View info",
    imgRightText: "Generative AI",
    eventImages: generativeAiImages,
    eventDescription: "",
  },
];
