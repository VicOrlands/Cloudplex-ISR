import { Metadata } from "next";
import Image from "next/image";
import styles from "./styles.module.css";
import hero from "@/assets/innovation/hero.png";
import vectorhero from "@/assets/innovation/Group1.png";
import vectorhero2 from "@/assets/innovation/Group2.svg";
import background from "@/assets/innovation/background.png";
import innovative from "@/assets/innovation/innovative.svg";
import scalable from "@/assets/innovation/scalable.svg";
import design from "@/assets/innovation/design.svg";
import completeness from "@/assets/innovation/completeness.svg";
import arrow from "@/assets/innovation/arrow.svg";
import { ButtonLink } from "@/components/button/Button";

export const metadata: Metadata = {
  title: "$5,000 African Innovation Coding Challenge by CloudPlexo",
  description: "Join the African Equity Innovation Challenge by CloudPlexo and turn your software-driven idea into reality. Submit your innovative project by October 31, 2022.",
  keywords: ['Software innovation challenge', 'African tech competition', 'Coding contest for African solutions'],
  alternates: {
    canonical: 'https://www.cloudplexo.com/innovation-challenge',
  },
};

const Criteria = [
  {
    id: 1,
    name: "Innovative and creative",
    image: innovative,
  },
  {
    id: 2,
    name: "Scalable Idea",
    image: scalable,
  },
  {
    id: 3,
    name: "Design and Usability",
    image: design,
  },
  {
    id: 4,
    name: "Completeness",
    image: completeness,
  },
];

function Innovation() {
  return (
    <div className={styles["innovation"]}>
      <section className={styles["hero"]}>
        <div className={styles["left-side"]}>
          <h1>$5,000 African Innovation <br /> Coding Challenge</h1>
          <h2>A Call <br /> to CODE...</h2>
          <p>
            Are you ambitious and do you have a software driven idea that
            would solve a problem in the African Community? The African
            Equity Innovation challenge can help you bring the solution to
            life.
          </p>

          <ButtonLink link="https://app.ilearncloud.io/signup" title="Get Started" />
        </div>

        <div className={styles["right-side"]}>
          <Image
            src={hero}
            className={styles["img"]}
            alt="$5,000 African Innovation Coding Challenge by CloudPlexo"
          />
          <Image
            src={vectorhero}
            className={styles["vectorhero"]}
            height={vectorhero.height}
            width={vectorhero.width}
            alt="$5,000 African Innovation Coding Challenge by CloudPlexo"
          />
        </div>
      </section>

      {/* Second Section */}
      <section className={styles["innovation-2"]}>
        <h2>Create A World-Class Digital Product</h2>
        <div className={styles["img"]}>
          <Image
            src={background}
            alt="Create A World-Class Digital Product"
          />
          <Image
            src={vectorhero2}
            className={styles["vectorhero"]}
            alt="Create A World-Class Digital Product"
          />
        </div>
      </section>

      {/* Third Section */}
      <section className={styles["innovation-3"]}>
        <div>
          <h2>Submission</h2>
          <ol>
            <li>
              Submission must be already part of CloudPlexo learner
              community ilearncloud.io and submission is made through
              ilearncloud platform
            </li>
            <li>
              Team Size : 1 - 5 Members with each being at least 18 years
              old
            </li>
            <li>
              Participants may enter as individuals or as part of a team
            </li>
            <li>
              The project must be new and built for the 2022 African
              software Innovation Challenge
            </li>
            <li>Submission deadline 31st October, 2022</li>
          </ol>
        </div>
        <div className={styles["middle-divider"]}>
        </div>
        <div>
          <h2>Benefits</h2>
          <ol>
            <li>Cash Price $5,000</li>
            <li>12 months free membership to ilearncloud.io</li>
            <li>Access to founders lab</li>
            <li>Internship opportunities </li>
            <li>Mentorship</li>
            <li>Free courses and certifications</li>
          </ol>
          <p>For sponsorship reach out to us: contact@cloudplexo.com</p>
        </div>
      </section>

      {/* Fourth Section */}
      <section className={styles["innovation-4"]}>
        <h2>Judging Criteria</h2>

        <div className={styles["criteria"]}>
          {Criteria.map((criteria, index) => (
            <div key={index}>
              <Image
                src={criteria.image}
                alt="Judging Criteria"
              />
              <p>{criteria.name}</p>
              <Image
                src={arrow}
                alt="Judging Criteria"
              />
            </div>
          ))}
        </div>

        <ButtonLink link="https://app.ilearncloud.io/signup" title="REGISTER NOW" />
      </section>
    </div>
  );
}

export default Innovation;
