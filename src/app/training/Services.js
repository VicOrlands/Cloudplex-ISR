import Image from "next/image";
import styles from "./styles.module.css";
import selfbased from "@/assets/training/self-based.png";
import classroom from "@/assets/training/classroom.png";
import training from "@/assets/training/online-training.png";
import instructor from "@/assets/training/online-instructor.png";
import { ButtonLink } from "@/components/button/Button";

function Services() {
  return (
    <section className={styles["offers"]}>
      <h2>What We Offer</h2>

      <div className={styles["offers-row"]}>
        <div>
          <Image src={instructor} alt="Classroom Training" />
          <h4>Classroom Training</h4>
        </div>

        <div>
          <Image src={classroom} alt="Onsite Training" />
          <h4>Onsite Training </h4>
        </div>

        <div
          style={{ backgroundColor: "#F4F8FB" }}
        >
          <Image src={training} alt="Online – Instructor-led" />
          <h4>Online – Instructor-led</h4>
        </div>

        <div>
          <Image src={selfbased} alt="Self-Based (On Demand)" />
          <h4>Self-Based (On Demand)</h4>
          <ButtonLink link="https://ilearncloud.io/" title="Go to iLearnCloud" />
        </div>
      </div>
    </section >
  );
}

export default Services;
