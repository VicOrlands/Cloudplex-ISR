import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { CourseDescriptionList } from "./array";
import { ButtonLink } from "@/components/button/Button";

type PageProps = {
  params: {
    slug: string;
  };
};

interface MetaProps {
  slug: string
}

export async function generateMetadata({ params }: { params: MetaProps }) {
  const { slug } = params
  const course = CourseDescriptionList.find(course => course.courseLink === slug)

  return {
    title: `Course: ${course?.seoTitle}`,
    description: course?.seoDesc,
    keywords: course?.seoDesc
  }
}

export async function generateStaticParams() {
  return CourseDescriptionList.map(({ courseLink }) => ({
    slug: courseLink || "404"
  }));
}

const Description: React.FC<PageProps> = ({ params }) => {
  const { slug } = params

  const currentCourse = CourseDescriptionList.filter(
    (course) => course.courseLink === slug,
  );

  return (
    <>
      {currentCourse.map((course) => (
        <div className={styles["course-description"]} key={course.title}>
          <div className={styles["intro"]}>
            <Image src={course.thumbnail} alt={course.seoTitle} />

            <div>
              <h1>{course.title}</h1>
              <ButtonLink title="Go to Course" link="https://app.ilearncloud.io/login" target className={styles["btn"]} />
            </div>
          </div>

          <div className={styles["content"]}>
            <h2>Course Description</h2>
            <hr />
            <p>{course.courseDescription}</p>

            <h3>Content</h3>
            <ol>
              {course.moduleList.map((module) => (
                <li key={module}>{module}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </>
  );
};

export default Description;
