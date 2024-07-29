"use client"
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import cover from "@/assets/blog/partnernetwork.webp";

export default class BlogTwentyOne extends Component {
  render() {
    return (
      <section className={styles["blog"]}>
        <ul className={styles["socials"]}>
          <li>Share</li>
          <li>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/cloudplexo-ascends-to-advanced-tier-consulting-&-technology-partner-with-aws"
              target="blank"
            >
              <FeatherIcon
                icon="facebook"
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/cloudplexo-ascends-to-advanced-tier-consulting-&-technology-partner-with-aws"
              target="blank"
            >
              <FeatherIcon
                icon="twitter"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/cloudplexo-ascends-to-advanced-tier-consulting-&-technology-partner-with-aws"
              target="blank"
            >
              <FeatherIcon
                icon="linkedin"
              />
            </a>
          </li>
        </ul>

        <div className={styles["main-content"]}>
          <h1>
            Breaking Boundaries: CloudPlexo Ascends to Advanced Tier
            Consulting and Technology Partner with AWS
          </h1>
          <br />
          <Image src={cover} alt="Breaking Boundaries: CloudPlexo Ascends to Advanced Tier Consulting and Technology Partner with AWS" />
          <br />
          <br />

          <p>
            We are excited to announce a significant milestone in our
            journey – CloudPlexo has achieved the prestigious status
            of Advanced Tier Consulting and Technology Partner with
            Amazon Web Services (AWS). This achievement not only
            reaffirms our commitment to excellence but also opens a
            new chapter of possibilities for our clients and partners.{" "}
          </p>
          <p>
            This accolade stands as a testament to our unwavering
            dedication to delivering cutting-edge cloud solutions and
            technology services. We have long held the belief that
            innovation knows no bounds, and this achievement
            solidifies our position as a leader in cloud-native IT
            consulting.
          </p>

          <h4>The Advanced Tier: A Symbol of Excellence</h4>
          <p>
            The Advanced Tier status is a recognition of our strong
            team of trained and certified technical individuals who
            have proven customer experience. It signifies our deep
            technical expertise, our commitment to exceptional
            customer experiences, and our ability to navigate the
            ever-evolving landscape of AWS.
            <br />
            As we step into this new phase of our partnership with
            AWS, we remain dedicated to pushing boundaries and driving
            transformative outcomes.
          </p>

          <h4>Elevating Your Cloud Journey</h4>
          <p>
            What does this mean for you? As an Advanced Tier
            Consulting and Technology Partner, we are uniquely
            positioned to offer an even higher level of service,
            innovation, and strategic guidance. Whether you're a
            startup navigating the cloud landscape or an established
            enterprise seeking to optimise your infrastructure,
            CloudPlexo is equipped with the expertise and resources to
            elevate your cloud journey.
          </p>

          <h4>Unleash the Potential</h4>
          <p>
            Join us in celebrating this milestone as we embark on a
            new era of innovation and collaboration. We extend our
            heartfelt gratitude to each of you who has been a part of
            our journey so far. Together, let's embrace the
            opportunities that lie ahead and harness the full
            potential of cloud technology.
          </p>
          <p>
            Stay tuned for more updates, insights, and success stories
            as we continue to break boundaries and redefine what's
            possible in the world of cloud computing.
          </p>
        </div>
      </section>
    );
  }
}
