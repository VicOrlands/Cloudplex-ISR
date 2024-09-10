"use client"

import React, { useState } from 'react'
import axios from "axios";
import Link from 'next/link';
import Image from 'next/image';
import styles from "./styles.module.css";
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { Technologiespage } from "../../facebookEvent";
import tel from "@/assets/tech/call-calling.png";
import customerCare from "@/assets/tech/care.gif";
import Dollar from "@/assets/tech/dollar.gif";
import Laptop from "@/assets/tech/laptop.gif";
import Call from "@/assets/tech/call.gif";
import Chat from "@/assets/tech/chatbot.gif";
import BgImg1 from "@/assets/tech/Main.png"
import BgImg2 from "@/assets/tech/mask-group.png"
import { LazyBackgroundImage } from '@/components/backgroundImage/bg';

interface ContactProps {
  fullName: string,
  phoneNumber: string,
  email: string,
  jobTitle: string,
  company: string,
}

const Technologies = () => {
  const router = useRouter();
  const [state, setState] = useState<ContactProps>({
    fullName: "",
    phoneNumber: "",
    email: "",
    jobTitle: "",
    company: "",
  })

  // componentDidMount() {
  // Technologiespage();
  // }

  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = async () => {
    const allFieldsFilled = Object.keys(state).every((key) => state[key as keyof ContactProps] !== "");

    if (allFieldsFilled) {
      var data = {
        fullname: state.fullName,
        phone: state.phoneNumber,
        email: state.email,
        jobtitle: state.jobTitle,
        company: state.company,
      };
      const saveform = await axios.post(
        "https://dj38icmcde.execute-api.eu-west-1.amazonaws.com/Prod/contactcentreform",
        data,
      );
      if (saveform.status === 200) {
        toast.success("Details received successfully", {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          autoClose: 2000,
          theme: "colored"
        });
        router.push("/success-page");
      } else {
        toast.info("Form not submitted", {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          autoClose: 2000,
          theme: "colored"
        });
      }
    } else {
      toast.error("Please enter all details", {
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: true,
        autoClose: 2000,
        theme: "colored"
      });
    }
  };

  return (
    <>
      <div className={styles["technologies"]}>
        <LazyBackgroundImage src={BgImg1} className={styles["hero-bg"]}>
          <section className={styles["hero"]}>
            <div className={styles["hero-left"]}>
              <h1>Omnichannel</h1>
              <h2>Contact Center
                <Image
                  src={tel}
                  alt="Amazon Connect - Cloud-Based Contact Center Services"
                />
              </h2>

              <div className={styles["technologies-contact"]}>
                <input
                  name="fullName"
                  value={state.fullName}
                  placeholder="Full Name"
                  onChange={formHandler}
                  type="text"
                />

                <input
                  name="phoneNumber"
                  value={state.phoneNumber}
                  placeholder="Phone number"
                  onChange={formHandler}
                  type="number"
                />

                <input
                  name="email"
                  value={state.email}
                  placeholder="Email"
                  onChange={formHandler}
                  type="text"
                />

                <input
                  name="jobTitle"
                  value={state.jobTitle}
                  placeholder="Job title"
                  onChange={formHandler}
                  type="text"
                />

                <input
                  name="company"
                  value={state.company}
                  placeholder="Company"
                  onChange={formHandler}
                  type="text"
                />

                <button
                  type="submit"
                  aria-label="submit"
                  onClick={submitForm}
                >
                  Submit
                </button>
              </div>
            </div>
          </section >
        </LazyBackgroundImage>

        <section className={styles["why-use"]}>
          <div>
            <h2>
              Amazon <span>Connect</span>
            </h2>
            <p>
              Cloud-based contact-centre service that makes it easy for any
              business to deliver better customer service at lower cost.
            </p>
          </div>

          <Image src={customerCare} alt="Amazon Connect" />
        </section>

        <section className={styles["features"]}>
          <h2>Call Center Core Features</h2>

          <section className={styles["decks"]}>
            <div>
              <Image src={Dollar} alt="Cost" className={styles["img"]} />

              <div>
                <h4>Cost</h4>
                <p>
                  Lower Cost, No Minimum Fees, No Long Term Commitments, Save
                  Up to 80% Cost
                </p>
              </div>
            </div>

            <div>
              <Image src={Laptop} alt="Scalable Call Center" className={styles["img"]} />

              <div>
                <h4>Scalable Call Center</h4>
                <p>
                  Unlimited Scalability, Integrated Chatbot, Track Tasks, Easy
                  to Use, Omni-Chanel Functionality, Fast and Secure.{" "}
                </p>{" "}
              </div>
            </div>

            <div>
              <Image src={Call} alt="Agents" className={styles["img"]} />

              <div>
                <h4>Agents</h4>
                <p>
                  Transfer Calls Seamlessly from PC to Mobile Phones, Keep
                  Track of Multiple Tasks , Keep Track of Chats, Calls, and
                  Tasks in one GUI
                </p>
              </div>
            </div>

            <div>
              <Image src={Chat} alt="Chatbot" className={styles["img"]} />

              <div>
                <h4>Chatbot</h4>
                <p>
                  Automated AL and ML Powered Chatbot, Handles Multiple Chats
                  & Automatically Resolves Unlimited Mundane Tasks
                </p>
              </div>
            </div>
          </section>
        </section>

        <LazyBackgroundImage src={BgImg2} className={styles["talk-bg"]}>
          <section className={styles["lets-talk"]}>
            <div>
              <h2>Let's Talk</h2>
              <Link href="/contact-us">Get in touch</Link>
            </div>
          </section>
        </LazyBackgroundImage>
      </div >

      <ToastContainer />
    </>
  );
}

export default Technologies;
