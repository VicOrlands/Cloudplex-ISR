import Link from "next/link";
import styles from "./styles.module.css"
import HeroImage from "@/assets/training/main.png";
import Image from "next/image";
import { ButtonLink, ButtonTranparentLink } from "@/components/button/Button";

function Hero() {
  return (
    <section className={styles["training-hero"]}>
      <Image
        loading="lazy"
        src={HeroImage}
        alt="Modern Computing Courses"
      />

      <div>
        <h1>Modern Computing Courses</h1>
        <p>
          Our highly experienced Professionals are recognised in the
          industry to have the highest-rated technical skills by
          employers. We Train and Develop highly competent Cloud
          Architects, Developers, Engineers, and most of them go on to
          work on large scale enterprise projects and command the
          highest salaries in the industry.
        </p>

        <div className={styles["btn-group"]}>
          <ButtonLink title="Get Started" link="/contact-training" />

          <ButtonTranparentLink title="Pricing" link="https://ilearncloud.io/pricing" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
