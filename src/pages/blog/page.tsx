"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";

import "./styles.css";
import axios from "axios";
import { blogs } from '@/app/blog/array';

const Page: React.FC = () => {
    const [email, setEmail] = useState<string>("")

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async () => {
        const emailRegex = new RegExp(
            /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
            "gm",
        );
        const isValidEmail = emailRegex.test(email);
        if (email !== "") {
            if (isValidEmail) {
                const saveform = await axios.post(
                    "https://enr95mz778.execute-api.eu-west-1.amazonaws.com/Prod/newsletter-cloudplexo",
                    { email: email },
                );
                if (saveform.status === 200) {
                    alert("Email address submitted successfully");
                    setEmail("");
                } else {
                    alert("Form not submitted");
                }
            } else {
                alert("Invalid format");
            }
        } else {
            alert("Empty input! Fill in your email address");
        }
    };

    // <SEO
    //     title="CloudPlexo Blog - Your No 1 Source for Cloud Computing Insights"
    //     description="Explore CloudPlexo's blog for expert insights on cloud computing, AWS, Azure, and GCP. Stay updated with cloud technology trends"
    //     keywords="Cloud Computing Insights, AWS Blog, Azure Articles, Google Cloud Updates, Cloud Technology Trends"
    // />
    return (
        <section className="section blogPage blog-container">
            <div className="blog-hero">
                <h2 className="blog-heading">
                    <div className="blog-container">
                        <div className="blog-hero-content">
                            <h2 className="blog-heading">Blogs</h2>
                            <p>
                                Get updated on the most recent developments in the industry,
                                including news, interviews, cutting-edge technologies, and
                                valuable resources.
                            </p>
                            <div className="blog-hero-cta">
                                <HiOutlineEnvelope size={30} />

                                <input
                                    type="text"
                                    placeholder="Enter your work email address"
                                    value={email}
                                    onChange={handleChange}
                                />
                                <button className="btn btn-mobile-i" onClick={handleSubmit}>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </h2>
            </div>
            <div className="blog-catalog blog-container">
                {blogs.map((blog, index) => (
                    <div key={index}
                        className="blog border-0 overflow-hidden"
                        style={{
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
                            margin: "10px",
                            padding: "15px",
                        }}
                    >

                        <Link href={blog.link} className="link">
                            <Image
                                src={blog.image}
                                className="img-fluid blog-catalog-image"
                                alt={blog.title}
                                style={{
                                    width: "100%",
                                    height: "20vh",
                                    objectFit: "contain",
                                }}
                            />
                        </Link>

                        <div className="content">
                            <Link href={blog.link} className="link">
                                <div className="content-title">
                                    <h5>{blog.title}</h5>
                                    <div>
                                        <BsArrowUpRight color="#000000" />
                                    </div>
                                </div>
                            </Link>
                            <p className="text-muted text-desc">{blog.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );

}

export default Page;
