"use client"
import React, { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css"
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-number-input";

const courses = [
    {
        title: "AWS CERTIFIED DEVELOPER COURSE",
        duration: "2 days",
    },
    {
        title: "AWS CERTIFIED SOLUTIONS ARCHITECT COURSE",
        duration: "3 days",
    },
    {
        title: "AWS CERTIFIED CLOUD PRACTIONER COURSE",
        duration: "2 days",
    },
    {
        title: "AWS SYSOPS ADMINISTRATOR COURSE",
        duration: " 3 days",
    },
    {
        title: "AWS CERTIFIED DEVOPS ENGINEER ASSOCIATE COURSE ",
        duration: " 3 days",
    },
    {
        title: "AWS CERTIFIED SOLUTIONS ARCHITECT PROFESSIONAL COURSE",
        duration: " 4 days",
    },
    {
        title: "AWS ADVANCED NETWORKING COURSE",
        duration: " 4 days",
    },
    {
        title: "AWS CERTIFIED SECURITY COURSE",
        duration: " 3 days",
    },
    {
        title: "AWS CERTIFIED MACHINE LEARNING COURSE",
        duration: " 4 days",
    },
    {
        title: "AWS CERTIFIED DATABASE COURSE",
        duration: " 3 days",
    },
    {
        title: "AWS CERTIFIED DATA ANALYTICS COURSE",
        duration: " 3 days",
    },
    {
        title: "FUNDAMENTALS OF AWS",
        duration: " 1 day",
    },
    {
        title: "Big Data Advanced Hadoop Ecosystem",
        duration: " 1 day",
    },
    {
        id: 3,
        title: "Complete Data Science and Machine Learning with R",
    },

    {
        id: 4,
        title: "Relational Databases & PostGRESQL",
    },
    {
        id: 5,
        title: "Devops with Ansible",
    },

    {
        id: 6,
        title: "Edge Computing: Driving the next evolution of internet Technology",
    },
    {
        id: 7,
        title: "Machine Learning",
    },
    {
        id: 8,
        title: "Networking CCNA",
    },
    {
        id: 9,
        title: "Non Relational Databases - NoSQL & MongoDB",
    },
    {
        id: 10,
        title: "Automated Software Testing Using Selenium",
    },
    {
        id: 11,
        title: "Kubernetes",
    },
    {
        id: 12,
        title: "Python for Data Science",
    },
    {
        id: 13,
        title: "Introduction to version control Git/Github",
    },
    {
        id: 14,
        title: "Java programming",
    },
    {
        id: 15,
        title: "Leveraging Cloud for business growth",
    },
    {
        id: 16,
        title: "Introduction to Continous Integration CI-Jenkins",
    },
    {
        id: 17,
        title: "Bigdata Beginner Hadoop ecosystem",
    },
    {
        id: 18,
        title: "Bigdata with Spark",
    },
    {
        id: 19,
        title: "Unix Shell Scripting",
    },
    {
        id: 20,
        title: "Microsoft Azure Fundamentals",
    },
    {
        id: 21,
        title: "Power Bi Analytics",
    },
];

function Contact() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        businessEmail: "",
        comments: "",
    });
    const [marketing] = useState("not subscribing");
    const [checked, setChecked] = useState(false);
    const [courseFund, setCourseFund] = useState("");
    const [courseType, setCourseType] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const { firstName, lastName, businessEmail, comments } = state;

    const formHandler = (e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    type E164Number = string;

    const handlePhoneChange = (value?: E164Number) => {
        setphoneNumber(value ?? '');
    };

    const handleCheckChange = () => {
        setChecked(!checked);
    };

    const handleSubmit = async () => {
        if (firstName && lastName && businessEmail && phoneNumber !== "") {
            let data = {
                trainingselection: courseType,
                coursefunding: courseFund,
                fname: firstName,
                lname: lastName,
                phone: phoneNumber,
                email: businessEmail,
                desc: comments,
                marketingInfo: checked.toString(),
            };
            const saveform = await axios.post(
                "https://rhinqcguqj.execute-api.eu-west-1.amazonaws.com/Prod/trainingformapi",
                data,
            );
            if (saveform.status === 200) {
                toast.success("Details received successfully", {
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    autoClose: 2000,
                    theme: 'colored'
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                toast.info("Form not submitted", {
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    autoClose: 2000,
                    theme: 'colored'
                });
            }
        } else {
            toast.error("Please fill all details", {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 2000,
                theme: 'colored'
            });
        }
    };

    return (
        <React.Fragment>
            {/* <SEO
        title="Training - CloudPlexo"
        description="Complete the CloudPlexo Training Contact Form to inquire about our courses. Choose your course funding source, select the training course type, and provide your details."
        keywords="Course inquiry form, Training course enrollment, Contact us for courses"
      /> */}
            <ToastContainer />
            <section className={styles["contactTraining"]}>
                <h1>TRAINING CONTACT FORM</h1>
                <label>
                    <span style={{ color: "red" }}>*</span>
                    Who will be funding the course
                    <select
                        value={courseFund}
                        onChange={(e) => setCourseFund(e.target.value)}
                    >
                        <option value="">Select Course Funding</option>
                        <option value="My Employer">My employer</option>
                        <option value="I will">I will</option>
                        <option value="Not sure">Not Sure</option>
                    </select>
                </label>
                <label>
                    <span style={{ color: "red" }}>*</span>
                    Training course
                    <select
                        value={courseType}
                        onChange={(e) => setCourseType(e.target.value)}
                    >
                        <option>Select Course Type</option>
                        {courses.map((course, index) => {
                            return (
                                <option value={course.title} key={index}> {course.title} </option>
                            );
                        })}
                    </select>
                </label>
                <label>
                    <span style={{ color: "red" }}>*</span>
                    First Name
                    <input
                        name="firstName"
                        type="text"
                        value={firstName}
                        onChange={formHandler}
                    />
                </label>
                <label>
                    <span style={{ color: "red" }}>*</span>
                    Last Name
                    <input
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={formHandler}
                    />
                </label>
                <label>
                    <span style={{ color: "red" }}>*</span>
                    MOBILE NUMBER
                    <PhoneInput
                        placeholder="Enter phone number"
                        international
                        defaultCountry="NG"
                        value={phoneNumber}
                        autoComplete="off"
                        onChange={handlePhoneChange}
                    />
                </label>
                <label>
                    <span style={{ color: "red" }}>*</span>
                    COMPANY EMAIL
                    <input
                        name="businessEmail"
                        type="text"
                        value={businessEmail}
                        onChange={formHandler}
                    />
                </label>
                <label>MESSAGE (OPTIONAL)
                    <input
                        name="comments"
                        type="textarea"
                        className="textarea"
                        value={comments}
                        onChange={formHandler}
                    />
                </label>
                <div className={styles["checkbox"]}>
                    <input
                        type="checkbox"
                        className="mr-3"
                        value={marketing}
                        onChange={handleCheckChange}
                    />
                    <p>I wish to sign up to our marketing offers and discounts</p>
                </div>
                <p>
                    By submitting your details you agree to be contacted in
                    order to respond to your enquiry
                </p>
                <button
                    type="submit"
                    aria-label="submit"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </section>
        </React.Fragment>
    );
}

export default Contact;
