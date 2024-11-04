"use client"

import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css";
import React, { Component } from "react";
import jaguar from "@/assets/casestudies/jaguar.webp";
import logo from "@/assets/casestudies/logo.webp";

class Jaguar extends Component {

  // <SEO
  //   title="Enhancing Cybersecurity at Jaguar Land Rover: A CloudPlexo Success Story"
  //   description="Discover how CloudPlexo partnered with Jaguar Land Rover to strengthen their cybersecurity program, identify vulnerabilities, and deploy advanced protection measures."
  //   keywords="Cybersecurity Enhancement, Jaguar Land Rover Case Study, Cybersecurity Program, Vulnerability Assessment, Advanced Protection Measures"
  // />

  render() {
    return (
      <React.Fragment>
        <section className={styles["gtb-pensions-page"]}>
          <section className={styles["logo-images"]}>
            <Image
              src={logo}
              alt="Enhancing Cybersecurity at Jaguar Land Rover: A CloudPlexo Success Story"
            />
            <Image
              src={jaguar}
              alt="Enhancing Cybersecurity at Jaguar Land Rover: A CloudPlexo Success Story"
            />{" "}
          </section>

          <section className={styles["main-body"]}>
            <h2>The Company</h2>
            <p>
              JLR, or Jaguar Land Rover, is a British automotive company that
              specializes in the production of luxury vehicles. JLR is known
              for its iconic brands, Jaguar and Land Rover, which have a rich
              heritage and are renowned for their performance, craftsmanship,
              and off-road capabilities.
              <br />
              Jaguar, founded in 1922, is known for its sleek and sporty
              vehicles. It offers a range of sedans, sports cars, and SUVs
              that combine elegance with high-performance capabilities. Jaguar
              vehicles are often associated with luxury and cutting-edge
              technology, providing a blend of comfort and dynamic driving
              experience.
              <br />
              Land Rover, established in 1948, is famous for its robust and
              capable off-road vehicles. Land Rover models are designed to
              tackle various terrains and adverse weather conditions, making
              them popular choices for outdoor enthusiasts and adventure
              seekers. The brand offers a diverse lineup of SUVs, including
              the iconic Range Rover, Discovery, and Defender models.
              <br />
              JLR has a global presence and sells its vehicles in numerous
              markets around the world. The company has manufacturing
              facilities in the United Kingdom, Brazil, China, India, and
              Slovakia. It invests heavily in research and development to
              introduce innovative technologies and enhance the sustainability
              of its vehicles.
            </p>
            <h2>
              <strong>Solution</strong>
            </h2>
            <p>Wiz, Sentinel one, Cequence, splunk, WAF, Firewalls</p>

            <h2>
              <strong>Business Challenge</strong>
            </h2>
            <p>
              CloudPlexo was tasked to support the robust cyber security
              programme of JLR which includes identifying assets and services,
              supporting assessments to understand vulnerabilities and
              weaknesses of assets, enabling cyber protection controls,
              deployment of detection and response capabilities and developing
              an operating model to support continuous risk and threat
              reduction.
            </p>
            <h2>
              <strong>Working Together</strong>
            </h2>
            <p>CloudPlexo working together as consulting services partner</p>

            <h2>
              <strong>Outcomes</strong>
            </h2>
            <p>
              Cyber security controls were brought up to the required
              standard, and at the same time new emergency cyber security
              controls were deployed and resources and tools were put in place
              to react to security threats.
            </p>
          </section>
        </section>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Jaguar;
