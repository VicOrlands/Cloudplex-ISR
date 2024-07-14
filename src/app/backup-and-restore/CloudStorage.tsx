"use client"
import axios from "axios";
import Image from "next/image";
import { FiBox, FiDatabase } from "react-icons/fi";
import styles from "./styles.module.css"
import React, { useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineEnvelope } from "react-icons/hi2";
import cloudstorage from "@/assets/backup/cloud-storage.png";

export default function CloudStorage() {
    const [term, setTerm] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [dataType, setDataType] = useState<string>("");
    const [storageCapacity, setStorageCapacity] = useState<string>("");
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setEmail(event.target.value);
    };
    const handleStorageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStorageCapacity(e.target.value);
    };
    const handleDataChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDataType(e.target.value);
    };
    const handleTermChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTerm(e.target.value);
    };

    const handleSubmit = async () => {
        if (email && dataType && storageCapacity && term !== "") {
            if (email.match(pattern)) {
                var data = {
                    datatype: dataType,
                    storagecapacity: storageCapacity,
                    term: term,
                    email: email,
                };
                const form = await axios.post(
                    "https://vcbm2u7m7e.execute-api.eu-west-1.amazonaws.com/Prod/storageapi",
                    data,
                );
                console.log(form);
                if (form.status === 200) {
                    window.location.reload();
                } else {
                    alert("Form not submitted");
                }
            } else {
                alert("Invalid email address");
            }
        } else {
            alert("Please enter all fields");
        }
    };

    return (
        <section className={styles["cloud-storage"]}>
            <div className={styles["cloud-text"]}>
                <h2>Storage to Cloud</h2>
                <p>
                    Cloud storage revolutionizes data management by providing
                    secure access and seamless storage from anywhere, at any time,
                    eliminating the limitations of physical devices and offering
                    cost-effective scalability, enhanced collaboration, data
                    protection, and seamless integration with other cloud-based
                    services.
                </p>
                <Image
                    src={cloudstorage}
                    alt="Storage to Cloud"
                />
            </div>

            <div className={styles["cloud-form"]}>
                <label>Email
                    <div className={styles["input-field"]}>
                        <i aria-hidden="true">
                            <HiOutlineEnvelope size={20} />
                        </i>
                        <input
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="name@email.com"
                        />
                    </div>
                </label>

                <label>Data Type
                    <div className={styles["input-field"]}>
                        <i aria-hidden="true">
                            <FiDatabase size={20} />
                        </i>
                        <select value={dataType} onChange={handleDataChange}>
                            <option value="">Select Data Type</option>
                            <option value="database">Database</option>
                            <option value="object storage">Object Storage</option>
                            <option value="file">File</option>
                        </select>
                    </div>
                </label>

                <label>Storage Capacity
                    <div className={styles["input-field"]}>
                        <i aria-hidden="true">
                            <FiBox size={20} />
                        </i>
                        <select
                            value={storageCapacity}
                            onChange={handleStorageChange}
                        >
                            <option value="">Select Storage Capacity </option>
                            <option value="20TB">20TB</option>
                            <option value="80TB">80TB</option>
                            <option value="160TB">160TB</option>
                            <option value="320TB">320TB</option>
                            <option value="640TB">640TB</option>
                            <option value="Unlimited">Unlimited</option>
                        </select>
                    </div>
                </label>

                <label>Term
                    <div className={styles["input-field"]}>
                        <i aria-hidden="true">
                            <LuCalendarDays size={20} />
                        </i>
                        <select
                            value={term}
                            onChange={handleTermChange}
                        >
                            <option value="">Select Term </option>
                            <option value="hourly">Hourly</option>
                            <option value="monthly">Monthly</option>
                            <option value="24 Months">24 Months</option>
                            <option value="36 Months">36 Months</option>
                            <option value="Long term">Long term</option>
                        </select>
                    </div>
                </label>

                <button
                    type="submit"
                    onClick={handleSubmit}
                    aria-label="send request"
                >
                    Send Request
                </button>
            </div>
        </section>
    );
}
