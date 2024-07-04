"use client"

import Link from "next/link";
import Image from "next/image";
import "./video-player.css"
import styles from "./styles.module.css";
import Marquee from "react-fast-marquee";
import { Player, BigPlayButton } from "video-react";
import 'video-react/dist/video-react.css';
import {
  AiOutlinePlus,
  AiFillCheckCircle,
  AiFillCloseCircle,
} from "react-icons/ai";

import BgImg from "@/assets/aws_partnership/data-analytics/wallpaper.png"
import img1 from "@/assets/aws_partnership/data-analytics/video-preview.jpeg";
import img2 from "@/assets/aws_partnership/data-analytics/nlaicoalitie-300x115.png";
import img3 from "@/assets/aws_partnership/data-analytics/microsoft-partner.png";
import img4 from "@/assets/aws_partnership/data-analytics/aws_logo.png";
import img5 from "@/assets/aws_partnership/data-analytics/cloud.png";
import img6 from "@/assets/aws_partnership/data-analytics/analyse.gif";
import img7 from "@/assets/aws_partnership/data-analytics/chart.gif";
import img8 from "@/assets/aws_partnership/data-analytics/augment.gif";
import img9 from "@/assets/aws_partnership/data-analytics/people.png";
import img10 from "@/assets/aws_partnership/data-analytics/research.png";
import img11 from "@/assets/aws_partnership/data-analytics/dots.gif";
import img12 from "@/assets/aws_partnership/data-analytics/sources.gif";
import img13 from "@/assets/aws_partnership/data-analytics/business.gif";
import img14 from "@/assets/aws_partnership/data-analytics/searching.gif";
import img15 from "@/assets/aws_partnership/data-analytics/discover.gif";
import img16 from "@/assets/aws_partnership/data-analytics/health.png";
import img17 from "@/assets/aws_partnership/data-analytics/construction.png";
import img18 from "@/assets/aws_partnership/data-analytics/logistics.png";
import img19 from "@/assets/aws_partnership/data-analytics/iot.png";
import img20 from "@/assets/aws_partnership/data-analytics/learn.png";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";

{/* <SEO
  title="Quantitative Data Analytics for Business | CloudPlexo"
  description="Transform your business with CloudPlexo's data analytics solutions. Gain actionable insights for strategic decision-making. Explore our analytics services now."
  keywords="data analytics for business, data analysis for business, quantitative data analysis, data analytics aws, Data Recycling Services, Data Repurposing, Data Transformation, Data Reuse, Data Augmentation"
/> */}

const DataAnalytics: React.FC = () => {
  return (
    <div className={styles["data-analytics"]}>
      <LazyBackgroundImage src={BgImg} className={styles["data-hero-bg"]}>
        <section className={styles["data-hero"]}>
          <div>
            <h1>
              AI Scan <br />
              Cloud First Partner
            </h1>
            <p>
              360 Degree Approach Where We Analyse How Your Data Can Be Recycled
              To Be Beneficial To Your Business.
            </p>
            <Link href="/schedule-consultation">
              Schedule Free Consultation
              <AiOutlinePlus id={styles["font"]} color="#000" />
            </Link>
          </div>

          <div className={styles["data-video"]}>
            <Player
              playsInline
              poster={img1.src}
              src="https://cloudplexo.com/cloudplexo-AI-Scan.mp4"
            >
              <BigPlayButton position="center" />
            </Player>
          </div>
        </section>
      </LazyBackgroundImage>

      <section className={styles["we-ai"]}>
        <section className={styles["partners"]}>
          <div>
            <Image
              src={img2}
              alt="Quantitative Data Analytics for Business | CloudPlexo"
            />
          </div>
          <div>
            <Image
              src={img3}
              alt="Quantitative Data Analytics for Business | CloudPlexo"
            />
          </div>
          <div>
            <Image
              src={img4}
              alt="Quantitative Data Analytics for Business | CloudPlexo"
            />
          </div>
          <div>
            <Image
              src={img5}
              alt="Quantitative Data Analytics for Business | CloudPlexo"
            />
          </div>
        </section>

        <h2>We AI</h2>

        <section className={styles["we-ai-flexsection"]}>
          <div>
            <Image
              src={img6}
              alt="Quantitative Data Analytics for Business | CloudPlexo"
            />
            <h4>ANALYSE INFORMATION</h4>
            <hr />
            <p>
              Understand your business, your goals, opportunity, stakeholders,
              customers and success criteria.
            </p>
          </div>

          <div>
            <Image
              src={img7}
              alt="Quantitative Data Analytics for Business | CloudPlexo"
            />
            <h4>APPLY INSIGHTS</h4>
            <hr />
            <p>
              Collaboration with your business to analyse, discover the value
              of your data.
            </p>
          </div>

          <div>
            <Image
              src={img8}
              alt="Quantitative Data Analytics for Business | CloudPlexo"
            />
            <h4>AUGMENT INTELLIGENCE</h4>
            <hr />
            <p>
              Validate the business value of your data to your business via
              applied intelligence
            </p>
          </div>
        </section>
      </section>

      <section className={styles["passion-driven-section"]}>
        <div>
          <h5>
            We Are Driven By Our Passion To Not Let Your Data Go To Waste..{" "}
          </h5>
          <p>
            We are driven by our passion to not let data go to waste and use
            data driven approach to add real value to our customers by
            empowering transformational goals, to drive innovation, and set
            them apart from the competition. By effectively recycling data and
            application modernisation using cloud to positively contribute to
            better delivery of information, products and services. In turn,
            addressing social and environmental challenges and achieving
            impact.
          </p>
          <Link href="/schedule-consultation">
            Schedule Free Consultation
            <AiOutlinePlus id={styles["font"]} />
          </Link>
        </div>
        <Image
          src={img9}
          alt="We Are Driven By Our Passion To Not Let Your Data Go To Waste"
        />
      </section>

      <section className={styles["customers"]}>
        <Image
          src={img10}
          alt="We Are Driven By Our Passion To Not Let Your Data Go To Waste"
        />

        <div>
          <h5>
            Add real value to our customers by empowering transformational
            goals to drive innovation.
          </h5>
          <p>
            We do this by: Analysing Information from all data and data
            sources, Applying Insights, common sense, curiosity and through a
            continuous iterative process of Augmenting Intelligence. Our
            Values are quality, honesty, integrity and teamwork. CloudPlexo
            goal is to apply its expertise and capabilities to contribute to a
            healthy society. This is being achieved by developing easy to use
            solutions and data enhanced apps.
          </p>
          <Link href="/download-canvas">
            Download our canvas
            <AiOutlinePlus id={styles["font"]} />
          </Link>
        </div>
      </section>

      <section className={styles["canvas"]}>
        <h2>Five canvas, One AI Use case.</h2>

        <section>
          <div>
            <Image
              src={img11}
              alt="Five canvas, One AI Use case"
            />
            <p>CONNECT DATA POINTS</p>
          </div>

          <div>
            <Image
              src={img12}
              alt="Five canvas, One AI Use case"
            />
            <p>ANALYSE YOUR DATA AND DATA SOURCES</p>
          </div>

          <div>
            <Image src={img13} alt="Five canvas, One AI Use case" />
            <p>UNDERSTANDING YOUR BUSINESS</p>
          </div>

          <div>
            <Image src={img14} alt="Five canvas, One AI Use case" />
            <p>FINDING THE RIGHT ALGORiTHM</p>
          </div>

          <div>
            <Image src={img15} alt="Five canvas, One AI Use case" />
            <p>Discover New Insights</p>
          </div>
        </section>
      </section>

      <section className={styles["industries"]}>
        <h2>Our Industries</h2>

        <div className={styles["industry-carousel"]}>
          <Marquee
            speed={100}
          >
            <div className={styles["carousel-item"]}>
              <Image src={img16} alt="Our Industries" />
              <div className={styles["details"]}>
                <p>Digital Healthcare</p>
              </div>
            </div>

            <div className={styles["carousel-item"]}>
              <Image src={img17} alt="Our Industries" />
              <div className={styles["details"]}>
                <p>Construction</p>
              </div>
            </div>

            <div className={styles["carousel-item"]}>
              <Image src={img18} alt="Our Industries" />
              <div className={styles["details"]}>
                <p>Logistics</p>
              </div>
            </div>

            <div className={styles["carousel-item"]}>
              <Image src={img19} alt="Our Industries" />
              <div className={styles["details"]}>
                <p>IOT</p>
              </div>
            </div>

            <div className={styles["carousel-item"]}>
              <Image src={img20} alt="Our Industries" />
              <div className={styles["details"]}>
                <p>From A Different Industry? Learn how we can help you.</p>
              </div>
            </div>
          </Marquee>
        </div>
      </section>

      <section className={styles["services"]}>
        <h2>
          Pick the right service that fits your needs
        </h2>

        <section>
          <div>
            <h4>Free Consultation</h4>
            <hr />

            <h5>BASIC</h5>
            <hr />

            <ul>
              <li>
                <AiFillCheckCircle id={styles["service-font"]} /> 1 hour
              </li>
              <li>
                <AiFillCheckCircle id={styles["service-font"]} /> 1 expert
              </li>
              <li>
                <AiFillCloseCircle id={styles["service-close-font"]} />
                Build own AI use case
              </li>
              <li>
                <AiFillCloseCircle id={styles["service-close-font"]} />
                Plan
              </li>
              <li>
                <AiFillCloseCircle id={styles["service-close-font"]} />
                AI Canvas
              </li>
            </ul>

            <Link href="/schedule-consultation">
              Schedule Now
            </Link>
          </div>

          <div>
            <h6>Popular</h6>

            <h4>AI Data Reycle Scan (Basic)</h4>
            <hr />

            <h5>PROFESSIONAL</h5>
            <hr />

            <ul>
              <li>
                <AiFillCheckCircle id={styles["service-font"]} /> One day
              </li>
              <li>
                <AiFillCheckCircle id={styles["service-font"]} /> One expert
              </li>
              <li>
                <AiFillCheckCircle id={styles["service-font"]} /> 3 AI Canvas
              </li>
              <li>
                <AiFillCheckCircle id={styles["service-font"]} />
                10 Monitoring Quota
              </li>
              <li>
                <AiFillCheckCircle id={styles["service-font"]} />1 aha moment
              </li>
              <li>
                <AiFillCloseCircle id={styles["service-close-font"]} />
                Build own AI Use case
              </li>
            </ul>

            <Link href="/schedule-consultation">
              Schedule Now
            </Link>
          </div>

          <div>
            <h4>AI Data Reycle Scan (Standard)</h4>
            <hr />

            <h5>ADVANCED</h5>
            <hr />

            <ul>
              <li>
                <AiFillCheckCircle id={styles["service-font"]} /> 5 days
              </li>
              <li>
                <AiFillCheckCircle id={styles["service-font"]} /> Multiple experts
              </li>
              <li>
                <AiFillCheckCircle id={styles["service-font"]} /> 6 AI canvas
              </li>
              <li>
                <AiFillCheckCircle id={styles["service-font"]} />
                Build own AI use case
              </li>
            </ul>

            <Link href="/schedule-consultation">
              Schedule Now
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};
export default DataAnalytics