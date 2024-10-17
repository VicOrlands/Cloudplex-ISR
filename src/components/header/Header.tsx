"use client";

import React, { useState } from "react";
import Logo from "../Logo"
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./header.module.css";
import { professional, resources, solutions } from "./dropdownArrays";
import clsx from "clsx";

const DesktopNav = () => {
    return (
        <div className={styles["main-header-nav"]}>
            <Link href="/">
                <Logo />
            </Link>

            <div className={styles["header-links"]}>
                <ul>
                    <li className={styles["dropdown-container"]}>
                        <Link className={styles["nav-link"]} href="#products">
                            <span>Solutions & Offerings</span> <IoIosArrowDown />
                        </Link>
                        <div className={styles["drop-down"]}>
                            <h4>Solutions & Offerings</h4>

                            <div className={styles["drop-down-content"]}>
                                {solutions.map(item => (
                                    <Link href={item.link} key={item.name}>
                                        <div className={styles["grid-item"]}>
                                            <span><item.icon /></span>
                                            <div>
                                                <h6>{item.name}</h6>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </li>

                    <li className={styles["dropdown-container"]}>
                        <Link className={styles["nav-link"]} href="#professionalservices">
                            <span>Professional Services</span> <IoIosArrowDown />
                        </Link>
                        <div className={styles["drop-down"]}>
                            <h4>Professional Services</h4>
                            <div className={styles["drop-down-content"]}>
                                {professional.map(item => (
                                    <Link href={item.link} key={item.name}>
                                        <div className={styles["grid-item"]}>
                                            <span><item.icon /></span>
                                            <div>
                                                <h6>{item.name}</h6>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </li>

                    <li className={styles["dropdown-container"]}>
                        <Link className={styles["nav-link"]} href="#resources">
                            <span>Resources</span> <IoIosArrowDown />
                        </Link>
                        <div className={styles["drop-down"]}>
                            <h4>Resources</h4>
                            {/* <div className={clsx(styles["drop-down-content"], styles["resources"])}>
                                {resources.map(item => (
                                    <Link href={item.link} key={item.name}>
                                        <div className={styles["grid-item"]}>
                                            <span><item.icon /></span>
                                            <div>
                                                <h6>{item.name}</h6>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div> */}

                            <div className={styles["drop-down-content"]}>
                                <div className={styles["left-column"]}>
                                    {resources.slice(0, 2).map((item) => (
                                        <Link href={item.link} key={item.name}>
                                            <div className={styles["grid-item"]}>
                                                <span><item.icon /></span>
                                                <div>
                                                    <h6>{item.name}</h6>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                <div className={styles["right-column"]}>
                                    {resources.slice(2).map((item) => (
                                        <Link href={item.link} key={item.name}>
                                            <div className={styles["grid-item"]}>
                                                <span><item.icon /></span>
                                                <div>
                                                    <h6>{item.name}</h6>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className={styles["dropdown-container"]}>
                        <Link className={styles["nav-link"]} href="/startups">
                            Startups
                        </Link>
                    </li>

                    <li className={styles["dropdown-container"]}>
                        <Link className={styles["nav-link"]} href="/cybersecurity">
                            Cybersecurity
                        </Link>
                    </li>

                    <li className={styles["dropdown-container"]}>
                        <Link className={styles["nav-link"]} href="/aws-partnership">
                            AWS Partnership
                        </Link>
                    </li>
                </ul>
            </div>

            <Link className={styles["header-btn"]} href="/contact-us">
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

            <div className={styles["mobile-nav"]}>
                <div className={styles["header-content"]}>
                    <Link onClick={closeMenu} href="/">
                        <Logo
                        />
                    </Link>

                    <div className={styles["menu-lines"]} onClick={toggleLine}>
                        <div className={isOpen ? styles["navbar-toggle open"] : styles["navbar-toggle"]}>
                            <div className={styles["lines"]}>
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={isOpen ? styles["visible-links"] : styles["invisible"]}>
                    <div className={styles["links"]}>
                        <ul>
                            <li className={styles["dropdown-container"]}>
                                <Link
                                    href="#products"
                                    onClick={() => toggleDropdown(1)}>
                                    <span>Solutions & Offerings</span>
                                    {isDropdownVisible === 1 ? (
                                        <IoIosArrowUp />
                                    ) : (
                                        <IoIosArrowDown />
                                    )}
                                </Link>
                                <div className={styles["dropdown"]}>
                                    <div className={`${isDropdownVisible === 1 && styles["show"]}`}>
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
                            <li className={styles["dropdown-container"]}>
                                <Link
                                    href="#professionalservices"
                                    onClick={() => toggleDropdown(2)}>
                                    <span>Professional Services</span>
                                    {isDropdownVisible === 2 ? (
                                        <IoIosArrowUp />
                                    ) : (
                                        <IoIosArrowDown />
                                    )}
                                </Link>
                                <div className={styles["dropdown"]}>
                                    <div
                                        className={`${isDropdownVisible === 2 && styles["show"]}`}
                                    >
                                        <Link onClick={closeMenu} href="/data-analytics">Data Analytics</Link>
                                        <Link onClick={closeMenu} href="/database-as-a-service">Database as a Service</Link>
                                        <Link onClick={closeMenu} href="/omni-channel-contact-center">Omni-channel Contact Center</Link>
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
                            <li className={styles["dropdown-container"]}>
                                <Link
                                    href="#resources"
                                    onClick={() => toggleDropdown(3)}>
                                    <span>Resources</span>
                                    {isDropdownVisible === 3 ? (
                                        <IoIosArrowUp />
                                    ) : (
                                        <IoIosArrowDown />
                                    )}
                                </Link>
                                <div className={styles["dropdown"]}>
                                    <div
                                        className={`${isDropdownVisible === 3 && styles["show"]}`}
                                    >
                                        <Link href="/press-release" onClick={closeMenu}>Press Releases</Link>
                                        <Link href="/whitepaper" onClick={closeMenu}>Whitepaper & E-books</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link className={styles["header-btn"]} onClick={closeMenu} href="/contact-us">
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
