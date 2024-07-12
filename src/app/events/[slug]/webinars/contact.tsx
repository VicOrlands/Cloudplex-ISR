"use client"

import axios from "axios";
import React, { useState } from "react";
import styles from './styles.module.css';
import { Bounce, toast } from "react-toastify";

function Contact() {
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
                toast.success("Form has been submitted", {
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    transition: Bounce,
                    theme: "colored",
                    autoClose: 2000,
                });
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                toast.info('Form not submitted', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    theme: "colored",
                    transition: Bounce,
                });
            }
        } else {
            toast.error("Please fill out all details", {
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
            <button
                type="button"
                aria-label="view webinar"
                onClick={handleSubmitForm}
            >
                Submit
            </button>
        </div>
    );
}

export default Contact;
