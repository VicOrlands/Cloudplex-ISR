"use client";

import React, { useEffect, useState } from "react";
import Logo from "../Logo"
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./header.css";

const DesktopNav = () => {
    return (
        <div className="main-header-nav">
            <Link href="/">
                <Logo />
            </Link>

            <div className="header-links">
                <ul>
                    <li className="dropdown-container">
                        <Link className="nav-link" href="#products">
                            <span>Solutions & Offerings</span> <IoIosArrowDown />
                        </Link>
                        <div className="drop-down dropdown-offerings">
                            <h4>Our Solutions & Offerings</h4>

                            <div className="drop-down-content">
                                <Link href="https://wendu.io/">Wendu</Link>
                                <Link href="/data-analytics">AI Scan</Link>
                                <Link href="/aws-managed-cloud">AWS Managed Service</Link>
                                <Link href="/backup-and-restore">Backup and Restore</Link>
                                <Link href="/cloud-migration">Cloud Migration</Link>
                                <Link href="/aws-maturity-service">AWS Maturity Service</Link>
                                <Link href="/security-compliance">Security Compliance</Link>
                                <Link href="/microsoft-on-aws">Microsoft on AWS</Link>
                                <Link href="/cloud-resource-managament">
                                    Cloud Resource Management
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown-container">
                        <Link className="nav-link" href="#professionalservices">
                            <span>Professional Services</span> <IoIosArrowDown />
                        </Link>
                        <div className="drop-down dropdown-professional">
                            <h4>Professional Services</h4>

                            <div className="drop-down-content">
                                <Link href="/technologies">Omni-channel Contact Center</Link>
                                <Link href="/devops-as-a-service">DevOps as a service</Link>
                                <Link href="/training">Cloud Training</Link>
                            </div>
                        </div>
                    </li>

                    <li className="dropdown-container">
                        <Link className="nav-link" href="/cybersecurity">
                            Cybersecurity
                        </Link>
                    </li>

                    <li className="dropdown-container">
                        <Link className="nav-link" href="/awsPartnership">
                            AWS Partnership
                        </Link>
                    </li>

                    <li className="dropdown-container">
                        <Link className="nav-link" href="/startups">
                            Startups
                        </Link>
                    </li>

                    <li className="dropdown-container">
                        <Link className="nav-link" href="/caseStudy">
                            Case Studies
                        </Link>
                    </li>

                    <li className="dropdown-container">
                        <Link className="nav-link" href="/events">
                            Events
                        </Link>
                    </li>

                    <li className="dropdown-container">
                        <Link className="nav-link" href="/blog">
                            Blogs
                        </Link>
                    </li>

                    <li className="dropdown-container">
                        <Link className="nav-link" href="#resources">
                            <span>Resources</span> <IoIosArrowDown />
                        </Link>
                        <div className="drop-down dropdown-resources">
                            <h4>Resources</h4>

                            <div className="drop-down-content">
                                <Link href="/press-release">Press Releases</Link>
                                <Link href="/whitepaper">Whitepaper & E-books</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <Link className="header-btn" href="/contact-us">
                Contact Us
            </Link>
        </div>
    );
};

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState<number | null>(null);

    const toggleLine = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? "auto" : "hidden";
    };

    const toggleDropdown = (dropdownId: number) => {
        setIsDropdownVisible((prevDropdownId) =>
            prevDropdownId === dropdownId ? null : dropdownId,
        );
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setIsOpen(false);
                document.body.style.overflow = "auto";
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <DesktopNav />

            <div className="desktop-nav">
                <div className="navigation-header">
                    <div className="header">
                        <div className="navigation">
                            <div className="header-content">
                                <Link href="/">
                                    <Logo
                                    />
                                </Link>

                                <div className="menu-lines" onClick={toggleLine}>
                                    <div
                                        className={isOpen ? "navbar-toggle open" : "navbar-toggle"}
                                    >
                                        <div className="lines">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            isOpen
                                ? "mobile-nav-container show-mobile"
                                : "mobile-nav-container"
                        }
                    >
                        <div className="mobile-nav">
                            <ul>
                                <li className="dropdown-container">
                                    <Link
                                        href="#products"
                                        className={`nav-link ${isDropdownVisible === 1 ? "active" : ""
                                            }`}
                                        onClick={() => toggleDropdown(1)}
                                    >
                                        <span>Solutions & Offerings</span>{" "}
                                        {isDropdownVisible === 1 ? (
                                            <IoIosArrowUp />
                                        ) : (
                                            <IoIosArrowDown />
                                        )}
                                    </Link>
                                    <div className="dropdown">
                                        <div
                                            className={`dropdown-content ${isDropdownVisible === 1 ? "show" : ""
                                                }`}
                                        >
                                            <Link href="https://wendu.io/">Wendu</Link>
                                            <Link href="/data-analytics">AI Scan</Link>
                                            <Link href="/aws-managed-cloud">AWS Managed Service</Link>
                                            <Link href="/backup-and-restore">Backup and Restore</Link>
                                            <Link href="/cloud-migration">Cloud Migration</Link>
                                            <Link href="/aws-maturity-service">AWS Maturity Service</Link>
                                            <Link href="/security-compliance">Security Compliance</Link>
                                            <Link href="/microsoft-on-aws">Microsoft on AWS</Link>
                                            <Link href="/cloud-resource-managament">
                                                Cloud Resource Management
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-container">
                                    <Link
                                        className={`nav-link ${isDropdownVisible === 2 ? "active" : ""
                                            }`}
                                        onClick={() => toggleDropdown(2)}
                                        href="#professionalservices"
                                    >
                                        <span>Professional Services</span>{" "}
                                        {isDropdownVisible === 2 ? (
                                            <IoIosArrowUp />
                                        ) : (
                                            <IoIosArrowDown />
                                        )}
                                    </Link>
                                    <div className="dropdown">
                                        <div
                                            className={`dropdown-content ${isDropdownVisible === 2 ? "show" : ""
                                                }`}
                                        >
                                            <Link href="/technologies">Omni-channel Contact Center</Link>
                                            <Link href="/devops-as-a-service">DevOps as a service</Link>
                                            <Link href="/training">Cloud Training</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link className="nav-link" href="/cybersecurity">
                                        Cybersecurity
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" href="/awsPartnership">
                                        AWS Partnership
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" href="/startups">
                                        Startups
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" href="/caseStudy">
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" href="/events">
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" href="/blog">
                                        Blogs
                                    </Link>
                                </li>
                                <li className="dropdown-container">
                                    <Link
                                        className={`nav-link ${isDropdownVisible === 3 ? "active" : ""
                                            }`}
                                        onClick={() => toggleDropdown(3)}
                                        href="#resources"
                                    >
                                        <span>Resources</span>{" "}
                                        {isDropdownVisible === 3 ? (
                                            <IoIosArrowUp />
                                        ) : (
                                            <IoIosArrowDown />
                                        )}
                                    </Link>
                                    <div className="dropdown">
                                        <div
                                            className={`dropdown-content ${isDropdownVisible === 3 ? "show" : ""
                                                }`}
                                        >
                                            <Link href="/events">Events</Link>
                                            <Link href="/press-release">Press Releases</Link>
                                            <Link href="/whitepaper">Whitepaper & E-books</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link className="header-btn" href="/contact-us">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
