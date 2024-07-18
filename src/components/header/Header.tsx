"use client";

import React, { useState } from "react";
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
                                <Link href="/aws-partnership/data-analytics">AI Scan</Link>
                                <Link href="/aws-managed-cloud">AWS Managed Service</Link>
                                <Link href="/backup-and-restore">Backup and Restore</Link>
                                <Link href="/aws-partnership/cloud-migration">Cloud Migration</Link>
                                <Link href="/aws-maturity-service">AWS Maturity Service</Link>
                                <Link href="/aws-partnership/security-compliance">Security Compliance</Link>
                                <Link href="/microsoft-on-aws">Microsoft on AWS</Link>
                                <Link href="/aws-partnership/cloud-resource-managament">
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
                        <Link className="nav-link" href="/aws-partnership">
                            AWS Partnership
                        </Link>
                    </li>

                    <li className="dropdown-container">
                        <Link className="nav-link" href="/startups">
                            Startups
                        </Link>
                    </li>

                    <li className="dropdown-container">
                        <Link className="nav-link" href="/case-study">
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
        const body = document.body.style

        if (!isOpen) {
            body.position = "fixed";
            body.top = `-${window.screenY}px`
        } else {
            const scrollY = body.top
            body.position = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1)
        }
    };

    const toggleDropdown = (dropdownId: number) => {
        setIsDropdownVisible((prevDropdownId) =>
            prevDropdownId === dropdownId ? null : dropdownId,
        );
    };

    const closeMenu = () => {
        setIsOpen(false);
        setIsDropdownVisible(null);

        const body = document.body.style
        const scrollY = body.top
        body.position = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1)
    };

    return (
        <>
            <DesktopNav />

            <div className="mobile-nav">
                <div className="header-content">
                    <Link onClick={closeMenu} href="/">
                        <Logo
                        />
                    </Link>

                    <div className="menu-lines" onClick={toggleLine}>
                        <div className={isOpen ? "navbar-toggle open" : "navbar-toggle"}>
                            <div className="lines">
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={isOpen ? "visible-links" : "invisible"}>
                    <div className="links">
                        <ul>
                            <li className="dropdown-container">
                                <Link
                                    href="#products"
                                    onClick={() => {
                                        toggleDropdown(1)
                                        closeMenu()
                                    }}>
                                    <span>Solutions & Offerings</span>
                                    {isDropdownVisible === 1 ? (
                                        <IoIosArrowUp />
                                    ) : (
                                        <IoIosArrowDown />
                                    )}
                                </Link>
                                <div className="dropdown">
                                    <div className={`${isDropdownVisible === 1 && "show"}`}>
                                        <Link onClick={closeMenu} href="https://wendu.io/">Wendu</Link>
                                        <Link onClick={closeMenu} href="/aws-partnership/data-analytics">AI Scan</Link>
                                        <Link onClick={closeMenu} href="/aws-managed-cloud">AWS Managed Service</Link>
                                        <Link onClick={closeMenu} href="/backup-and-restore">Backup and Restore</Link>
                                        <Link onClick={closeMenu} href="/aws-partnership/cloud-migration">Cloud Migration</Link>
                                        <Link onClick={closeMenu} href="/aws-maturity-service">AWS Maturity Service</Link>
                                        <Link onClick={closeMenu} href="/aws-partnership/security-compliance">Security Compliance</Link>
                                        <Link onClick={closeMenu} href="/microsoft-on-aws">Microsoft on AWS</Link>
                                        <Link onClick={closeMenu} href="/aws-partnership/cloud-resource-managament">
                                            Cloud Resource Management
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown-container">
                                <Link
                                    href="#professionalservices"
                                    onClick={() => {
                                        toggleDropdown(2)
                                        closeMenu()
                                    }}
                                >
                                    <span>Professional Services</span>
                                    {isDropdownVisible === 2 ? (
                                        <IoIosArrowUp />
                                    ) : (
                                        <IoIosArrowDown />
                                    )}
                                </Link>
                                <div className="dropdown">
                                    <div
                                        className={`${isDropdownVisible === 2 && "show"}`}
                                    >
                                        <Link onClick={closeMenu} href="/technologies">Omni-channel Contact Center</Link>
                                        <Link onClick={closeMenu} href="/devops-as-a-service">DevOps as a service</Link>
                                        <Link onClick={closeMenu} href="/training">Cloud Training</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link onClick={closeMenu} href="/cybersecurity">
                                    Cybersecurity
                                </Link>
                            </li>
                            <li>
                                <Link onClick={closeMenu} href="/aws-partnership">
                                    AWS Partnership
                                </Link>
                            </li>
                            <li>
                                <Link onClick={closeMenu} href="/startups">
                                    Startups
                                </Link>
                            </li>
                            <li>
                                <Link onClick={closeMenu} href="/case-study">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link onClick={closeMenu} href="/events">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link onClick={closeMenu} href="/blog">
                                    Blogs
                                </Link>
                            </li>
                            <li className="dropdown-container">
                                <Link
                                    href="#resources"
                                    onClick={() => {
                                        toggleDropdown(3)
                                        closeMenu()
                                    }}
                                >
                                    <span>Resources</span>
                                    {isDropdownVisible === 3 ? (
                                        <IoIosArrowUp />
                                    ) : (
                                        <IoIosArrowDown />
                                    )}
                                </Link>
                                <div className="dropdown">
                                    <div
                                        className={`${isDropdownVisible === 3 && "show"}`}
                                    >
                                        <Link href="/press-release" onClick={closeMenu}>Press Releases</Link>
                                        <Link href="/whitepaper" onClick={closeMenu}>Whitepaper & E-books</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link className="header-btn" onClick={closeMenu} href="/contact-us">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    );
}
