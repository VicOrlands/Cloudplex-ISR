import { FiPhoneCall } from "react-icons/fi";
import HeroImage from "@/assets/cloud/founders.webp";
import styles from "./styles.module.css"
import Partners from "@/components/partners/Partners";
import Image from "next/image";
import { ButtonLink } from "@/components/button/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CloudPlexo's Founders Lab - Empowering African Descent Entrepreneurs",
  description: "Invest in your entrepreneurial journey with CloudPlexo's Founders Lab. We support early-stage founders of African descent to bring value to the mass market. Apply now and power your startup dreams.",
  keywords: ['Startup support program', 'Entrepreneurial empowerment', 'African descent entrepreneurs', 'Early-stage founders', 'Mass market value delivery'],
  alternates: {
    canonical: "https://www.cloudplexo.com/founders-lab",
  },
};

function FoundersLab() {
  return (
    <>
      <section className={styles["founders"]}>
        <div className={styles["row-grid"]}>
          <div>
            <Image src={HeroImage} alt="CloudPlexo's Founders Lab - Empowering African Descent Entrepreneurs" />
          </div>

          <div className={styles["founders-content"]}>
            <h1>Cloudplexo’s <br /> <span>Founders Lab</span></h1>

            <p>"To go further, we power Founders."</p>
            <p>
              Invest and support early-stage founders of African descent to
              deliver value to mass market.
            </p>
            <ButtonLink link="https://forms.gle/qDviihFouFjZRzbq5" title="Apply Now" />
          </div>
        </div>
      </section>

      <Partners />

      <div className={styles["foot"]}>
        <p>
          Enquire for more information{" "}
          <i className="ml-3">
            <FiPhoneCall />
          </i>
        </p>
        <ButtonLink title="Contact Us" link="/contact-us" />
      </div>
    </>
  );
}

export default FoundersLab;
