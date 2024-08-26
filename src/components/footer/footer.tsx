import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import logo from "@/assets/landing/logo-white.svg";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

// #region Array
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
            { title: "FAQ", link: "/faq" },
        ],
        grid3: [
            { title: "Blogs", link: "/blog" },
            { title: "Case studies", link: "/case-study" },
            { title: "Whitepaper", link: "/whitepaper" },
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
                <div className={styles["address"]}>
                    <p>
                        <b>Headquarters London:</b> 124 City Rd, London EC1V 2NX London, United Kingdom.
                    </p>
                    <p>
                        <b>Lagos:</b> 15 Ihuntayi Rd, Oniru Rd, Victoria Island 101001.
                    </p>
                    <p>
                        <b>Abuja:</b> First Floor, Nigerian Merit Award House, 22 Aguyi Ironsi Street, Maitama.
                    </p>
                    <p>
                        <b>Kenya:</b> Kenyatta Avenue ICEA Building, 17th floor, Kenyatta Avenue, P.O BOX 15168-00400, Nairobi.
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
