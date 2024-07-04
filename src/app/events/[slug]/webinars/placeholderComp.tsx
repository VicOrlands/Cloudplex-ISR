"use client"

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from './styles.module.css';
import { Speaker } from "../../eventsArray";
import axios from "axios";

interface PlaceholderCompProps {
    title?: string, src: StaticImageData, alt: string, speakers?: Speaker[]
}

function PlaceholderComp({ title, src, alt, speakers = [] }: PlaceholderCompProps) {
    const [message, setMessage] = useState("");
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        businessEmail: "",
        phoneNumber: "",
        companyName: "",
        jobTitle: "",
    });
    const {
        firstName,
        lastName,
        businessEmail,
        phoneNumber,
        companyName,
        jobTitle,
    } = state;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const handleSubmitForm = async () => {
        if (
            firstName &&
            lastName &&
            businessEmail &&
            companyName &&
            jobTitle !== ""
        ) {
            var data = {
                firstname: firstName,
                lastname: lastName,
                businessemail: businessEmail,
                companyname: companyName,
                phonenumber: phoneNumber,
                jobtitle: jobTitle,
            };

            const saveform = await axios.post(
                "https://9fuof3bpxc.execute-api.eu-west-1.amazonaws.com/Prod/webinarcontactform",
                data,
            );
            if (saveform.status === 200) {
                setMessage("Form has been submitted ");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                alert("Form not submitted");
            }
        } else {
            setMessage("Please fill out all details");
        }
    };
    // <SEO
    //     title="Webinar: Edge Computing - Shaping the Future of Internet and Technology"
    //     description="Join our webinar to discover how Edge Computing is revolutionizing the tech landscape. Learn from industry experts."
    //     keywords="Edge technology, Real-time data processing, Internet and technology evolution, Cloud ecosystem"
    // />

    return (
        <section className={styles.placeholderPage}>
            <h1>{title}</h1>

            <div className={styles.placeholder}>
                <div>
                    <Image
                        priority
                        src={src}
                        alt={alt}
                    />
                    <h2>About The Webinar</h2>
                    <p>
                        This conference will help you overcome critical challenges -
                        reducing latency, building quality infrastructure, and
                        decreasing costs - with real-time data processing. Learn from
                        key players in the Cloud ecosystem and build partnerships that
                        will drive edge to the next level.
                    </p>
                </div>

                <div className={styles.inputContainer}>
                    <input
                        name="firstName"
                        value={firstName}
                        placeholder="First Name"
                        onChange={handleChange}
                        type="text"
                    />
                    <input
                        name="lastName"
                        value={lastName}
                        placeholder="Last Name"
                        onChange={handleChange}
                        type="text"
                    />
                    <input
                        name="businessEmail"
                        value={businessEmail}
                        placeholder="Business Email"
                        onChange={handleChange}
                        type="text"
                    />
                    <input
                        name="companyName"
                        value={companyName}
                        placeholder="Company Name"
                        onChange={handleChange}
                        type="text"
                    />
                    <input
                        name="phoneNumber"
                        value={phoneNumber}
                        placeholder="Phone Number"
                        onChange={handleChange}
                        type="text"
                    />
                    <input
                        name="jobTitle"
                        value={jobTitle}
                        placeholder="Job Title"
                        onChange={handleChange}
                        type="text"
                    />
                    <p>{message}</p>

                    <button
                        type="button"
                        aria-label="view webinar"
                        onClick={handleSubmitForm}
                    >
                        View Webinar
                    </button>
                </div>
            </div>

            {speakers.length > 0 && <div className={styles.authorsSection}>
                <h2>Guest Speakers</h2>

                <div className={styles.authors}>
                    {speakers.map((speaker, i) => (
                        <div key={i}>
                            <Image
                                src={speaker.image}
                                alt="Guest Speakers"
                            />
                            <h3>{speaker.name}</h3>
                            <p>
                                {speaker.jobTitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>}
        </section>
    );
}

export default PlaceholderComp;
