import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import logo from "@/assets/landing/logo-white.svg";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    const state = {
        grid1: [
            { title: "Terms of Services", link: "/terms-of-service" },
            { title: "AWS Partnership", link: "/aws-partnership" },
            { title: "Contact Us", link: "/contact-us" },
            { title: "Privacy Policy", link: "/privacy-policy" },
            { title: "Cookie Policy", link: "/cookie-policy" },
        ],
        grid2: [
            { title: "Founders Lab", link: "/founders-lab" },
            { title: "Innovation Challenge", link: "/innovation-challenge" },
            { title: "Training", link: "/training" },
            { title: "FAQs", link: "/faq" },
        ],
        grid3: [
            { title: "Blogs", link: "/blog" },
            { title: "Case studies", link: "/case-study" },
            { title: "Webinars", link: "/whitepaper" },
            { title: "Press Releases", link: "/press-release" },
        ],
    };

    return (
        <footer className={styles["footer"]}>
            <div className={styles["first-div"]}>
                <Image
                    src={logo}
                    loading="lazy"
                    alt="Wendu - Cloud Security and Cost"
                />
                <div>
                    <p>
                        Headquarters: London 124 City Rd, London EC1V 2NX London,
                        United Kingdom.
                    </p>
                    <p>
                        Lagos: 15 Ihuntayi Rd, Oniru Rd, Victoria Island 101001,Lagos,
                        Nigeria.
                    </p>

                    <p>
                        Abuja: First Floor, Nigerian Merit Award House, 22 Aguyi
                        Ironsi Street, Maitama, Abuja
                    </p>
                </div>
                <div className={styles["footer-social-links"]}>
                    <Link href="https://www.linkedin.com/company/cloudplexo/mycompany">
                        <BsLinkedin color="white" size={24} />
                    </Link>
                    <Link href="https://www.instagram.com/cloudplexo/">
                        <BsInstagram color="white" size={24} />
                    </Link>
                    <Link href="https://web.facebook.com/CloudplexoCMP">
                        <BsFacebook color="white" size={24} />
                    </Link>
                </div>
            </div>

            <div>
                <h5>Company</h5>
                <ul>
                    {state.grid1.map((grid, key) => (
                        <li key={key}>
                            <Link href={grid.link}>{grid.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h5>Useful Links</h5>
                <ul>
                    {state.grid2.map((grid, key) => (
                        <li key={key}>
                            <Link href={grid.link}>{grid.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h5>Resources</h5>
                <ul>
                    {state.grid3.map((grid, key) => (
                        <li key={key}>
                            <a href={grid.link}>{grid.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer >
    );
}

export default Footer;
