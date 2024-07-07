"use client"

import React, { Component } from "react";
import logo from "@/assets/casestudies/logo.png";
import bp from "@/assets/casestudies/alarrt.png";
import landerImg from "@/assets/casestudies/AlarrtBg.webp";
import Image from "next/image";
import Footer from "../footer/page";
import styles from "./styles.module.css";

class Alarrt extends Component {
  render() {
    return (
      <>
        <section className={styles["gtb-pensions-page"]}>
          <h1>
            Alarrt achieves enhanced cost efficiency, elevated security
            standards, and a highly scalable and efficient infrastructure.
          </h1>

          <section className={styles["logo-images"]}>
            <Image
              src={bp}
              alt="Kobo360's Success Story: Enhancing Cloud Security and Cost Optimization with Wendu by CloudPlexo"
              className={styles["phastImg"]}
            />

            <Image
              src={logo}
              alt="Kobo360's Success Story: Enhancing Cloud Security and Cost Optimization with Wendu by CloudPlexo"
            />
          </section>

          <section className={styles["main-body"]}>
            <Image
              src={landerImg}
              alt="Kobo360's Success Story: Enhancing Cloud Security and Cost Optimization with Wendu by CloudPlexo"
            />

            <h2>Overview</h2>
            <p>
              Alarrt is the essential companion for your journeys. It's a social
              app designed to keep you updated about road conditions,
              disturbances, and emergencies along your route in advance. Not
              only does Alarrt provide real-time information, but it also
              connects users with the nearest help in case of emergencies,
              whether at home or on the move, all with a simple click.
            </p>

            <h2>Stay Safe on the Go:</h2>
            <p>
              Alarrt ensures your safety wherever you travel. Whether facing
              medical emergencies or vehicle breakdowns, Alarrt swiftly connects
              you with the necessary assistance. By anticipating road
              emergencies, Alarrt helps you avoid severe traffic delays by
              suggesting alternative routes, saving you precious time that would
              otherwise be spent stuck in traffic.
            </p>

            <h2>Customer Challenge</h2>
            <p>
              Alarrt is undertaking a migration of its operations to Amazon Web
              Services (AWS) to enhance service availability, reliability, and
              flexibility. This strategic move, leveraging AWS's RDS (Relational
              Database Service), aligns perfectly with Alarrt's growth
              objectives. The migration to AWS, facilitated by CloudPlexo's AWS
              Maturity Services, marks a significant step in Alarrt's journey
              towards future success.
            </p>

            <h2>Solution</h2>
            <p>
              The primary goal of this project is to develop a highly optimized
              cloud infrastructure on AWS, significantly boosting the
              capabilities of the Alarrt platform.
            </p>

            <h2>Results and Benefits</h2>
            <p>
              With the support of CloudPlexo's AWS Cloud Maturity Service,
              Alarrt achieves enhanced cost efficiency, elevated security
              standards, and a highly scalable and efficient infrastructure.
              This transformation streamlines operations, positioning Alarrt for
              sustained growth and success in the future.
            </p>
          </section>
        </section>

        <Footer />
      </>
    );
  }
}

export default Alarrt;
