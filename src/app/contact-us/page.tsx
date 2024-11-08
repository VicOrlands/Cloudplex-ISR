"use client";

import axios from "axios";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import BgImg from "@/assets/contactbg.png";
import styles from "./styles.module.css";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";

interface ContactProps {
  firstName: string;
  lastName: string;
  companyname: string;
  businessEmail: string;
  jobtitle: string;
  phone: string;
  comments: string;
}

const Contact = () => {
  const [state, setState] = useState<ContactProps>({
    firstName: "",
    lastName: "",
    businessEmail: "",
    companyname: "",
    jobtitle: "",
    phone: "",
    comments: "",
  });

  const formHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = async () => {
    const allFieldsFilled = Object.keys(state).every(
      (key) => state[key as keyof ContactProps] !== ""
    );

    if (allFieldsFilled) {
      const data = {
        fname: state.firstName,
        lname: state.lastName,
        companyname: state.companyname,
        phone: state.phone,
        email: state.businessEmail,
        desc: state.comments,
      };
      const saveform = await axios.post(
        "https://a6h3k55vh7.execute-api.eu-west-1.amazonaws.com/Stag/contactcust",
        data
      );
      if (saveform.status === 200) {
        toast.success("Details received successfully", {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          transition: Bounce,
          theme: "colored",
          autoClose: 2000,
        });

        setState({
          firstName: "",
          lastName: "",
          businessEmail: "",
          companyname: "",
          jobtitle: "",
          phone: "",
          comments: "",
        });
      } else {
        toast.error("Form not submitted", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: "colored",
          transition: Bounce,
        });
      }
    } else {
      toast.error("Please enter all fields", {
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: true,
        autoClose: 2000,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <section className={styles["contact-page"]}>
      <div className={styles["form-section"]}>
        <h1>Let's Talk About your Cloud</h1>

        <label>
          Full Name
          <input
            name="firstName"
            value={state.firstName}
            placeholder="First Name"
            onChange={formHandler}
            type="text"
          />
        </label>

        <label>
          Last Name
          <input
            name="lastName"
            value={state.lastName}
            placeholder="Last Name"
            onChange={formHandler}
            type="text"
          />
        </label>

        <label>
          Work Email
          <input
            name="businessEmail"
            value={state.businessEmail}
            placeholder="you@company.com"
            onChange={formHandler}
            type="text"
          />
        </label>

        <label>
          Phone number
          <input
            name="phone"
            value={state.phone}
            onChange={formHandler}
            placeholder="+1 (555) 000-0000"
            type="text"
          />
        </label>

        <label>
          Job Title
          <input
            name="jobtitle"
            value={state.jobtitle}
            placeholder="Your Job title"
            onChange={formHandler}
            type="text"
          />
        </label>

        <label>
          Company
          <input
            name="companyname"
            placeholder="Your Company"
            onChange={formHandler}
            value={state.companyname}
            type="text"
          />
        </label>

        <label>
          How can we help?
          <textarea
            name="comments"
            value={state.comments}
            onChange={formHandler}
            placeholder="Tell us a how we can help..."
          ></textarea>
        </label>

        <button type="submit" aria-label="submit" onClick={submitForm}>
          Submit
        </button>

        <h3>
          United Kingdom: <span>+442070721919</span>
        </h3>
        <h3>
          Nigeria: <span>+234 901 226 2543, +234 707 049 4845</span>
        </h3>
        <h3>
          You can reach us anytime via <span>contact@cloudplexo.com</span>
        </h3>
      </div>

      <LazyBackgroundImage src={BgImg} className={styles["contact-bg"]}>
        <div className={styles["contact-bg"]}></div>
      </LazyBackgroundImage>
    </section>
  );
};
export default Contact;
