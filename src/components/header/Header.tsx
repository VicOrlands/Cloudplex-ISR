"use client";

import React, { useState } from "react";
import Logo from "../Logo"
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./header.module.css";
import { professional, resources, solutions } from "./dropdownArrays";
import clsx from "clsx";
import { DotIcon } from "./Icons";

const DesktopNav = () => {
    return (
        <div className={styles["main-header-nav"]}>
            <Link href="/" style={{ zIndex: 9999 }}>
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
                            <div className={styles["drop-down-content"]}>
                                <div className={styles["left-column"]}>
                                    {resources.slice(0, 2).map((item) => (
                                        <Link href={item.link} key={item.name}>
                                            <div className={styles["grid-item"]}>
                                                <span><item.icon /></span>
                                                <div>
                                                    <h6>{item.name}
                                                        {item.name === "Events" && <span><DotIcon /> New</span>}
                                                    </h6>
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
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const toggleLine = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setOpenDropdown(null);
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
                        <div className={isOpen ? clsx(styles["navbar-toggle"], styles["open"]) : styles["navbar-toggle"]}>
                            <div className={styles["lines"]}>
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles["mobile-visible"]} ${isOpen ? styles["active"] : ""}`}>
                    <ul>
                        <li onClick={() => toggleDropdown(0)}
                            className={openDropdown === 0 ? styles["remove-mg-bottom"] : styles[""]}
                        >
                            <span>Solutions & Offerings</span>
                            {openDropdown === 0 ? <IoIosArrowUp id={styles["icon"]} /> : <IoIosArrowDown id={styles["icon"]} />}
                        </li>
                        {openDropdown === 0 && (
                            <div className={styles["dropdown"]}>
                                {solutions.map(item => (
                                    <Link onClick={closeMenu} href={item.link} key={item.name}>
                                        <div className={styles["grid-item"]}>
                                            <span><item.icon /></span>
                                            <h6>{item.name}</h6>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        <li onClick={() => toggleDropdown(1)}
                            className={openDropdown === 1 ? styles["remove-mg-bottom"] : styles[""]}>
                            <span>Professional Services</span>
                            {openDropdown === 1 ? <IoIosArrowUp id={styles["icon"]} /> : <IoIosArrowDown id={styles["icon"]} />}
                        </li>
                        {openDropdown === 1 && (
                            <div className={styles["dropdown"]}>
                                {professional.map(item => (
                                    <Link onClick={closeMenu} href={item.link} key={item.name}>
                                        <div className={styles["grid-item"]}>
                                            <span><item.icon /></span>
                                            <h6>{item.name}</h6>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        <li onClick={() => toggleDropdown(2)}
                            className={openDropdown === 2 ? styles["remove-mg-bottom"] : styles[""]}>
                            <span>Resources</span>
                            {openDropdown === 2 ? <IoIosArrowUp id={styles["icon"]} /> : <IoIosArrowDown id={styles["icon"]} />}
                        </li>
                        {openDropdown === 2 && (
                            <div className={styles["dropdown"]}>
                                {resources.map((item) => (
                                    <Link onClick={closeMenu} href={item.link} key={item.name}>
                                        <div className={styles["grid-item"]}>
                                            <span><item.icon /></span>
                                            <h6>{item.name}
                                                {item.name === "Events" && <span><DotIcon /> New</span>}
                                            </h6>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        <li>
                            <Link onClick={closeMenu} href="/startups">
                                Startups
                            </Link>
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
                    </ul>

                    <div className={styles["btn-div"]}>
                        <Link href="/contact-us">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div >
        </>
    );
}
