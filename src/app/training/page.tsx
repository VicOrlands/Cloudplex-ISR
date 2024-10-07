import Hero from "./Hero";
import Review from "./Review";
import Courses from "./Courses";
import { Metadata } from "next";
import Services from "./Services";
import styles from "./styles.module.css"
import VideoSection from "./VideoSection";
import { ButtonTranparentLink } from "@/components/button/Button";

export const metadata: Metadata = {
  title: "Highly Rated Modern Computing Courses - CloudPlexo",
  description: "Unlock Your Tech Potential - Learn modern computing tech skills, including AWS Certified Cloud Practitioner, Microsoft Azure Fundamentals, and more.",
  keywords: ['Cloud technology training', 'Tech skills development', 'Cloud certification programs', 'Computing courses with experts'],
  alternates: {
    canonical: "https://www.cloudplexo.com/training"
  }
};

function Training() {
  return (
    <div className={styles["training"]}>
      <Hero />
      <Courses />
      <Services />
      <Review />
      <VideoSection />

      <div className={styles["footer"]}>
        <h2>
          Learn modern computing tech skills to drive your career - whether
          you're a beginner or an experienced tech professional.
        </h2>

        <ButtonTranparentLink title="Enquire for more information" link="/contact-training" />
      </div>
    </div>
  );
}

export default Training;
