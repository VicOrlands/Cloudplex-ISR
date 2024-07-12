"use client"

import React, { useState } from "react";
import classes from "./faq.module.css";
import Avatar from "@/assets/aws_dynamoDb/Avatar.png";
import Avatar2 from "@/assets/aws_dynamoDb/Avatar1.png";
import Avatar3 from "@/assets/aws_dynamoDb/Avatar2.png";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { QuestionsProps } from "@/app/aws-partnership/[slug]/cloudMigration/questions";

interface FaqProps {
  title: string,
  subtitle: string,
  questions: QuestionsProps[]
}

const FaqPage: React.FC<FaqProps> = ({ title, subtitle, questions }) => {
  const [dropdown, setDropdown] = useState<number[]>([]);

  const handleOpen = (id: number) => {
    if (dropdown.includes(id)) {
      setDropdown(dropdown.filter((item) => item !== id));
    } else {
      setDropdown([...dropdown, id]);
    }
  };

  return (
    <section className={classes["faq-section"]}>
      {questions.length > 0 && <h2>Frequently asked questions</h2>}

      {questions.length > 0 &&
        questions.map((faq) => (
          <div key={faq.id} className={classes["faq"]}>
            <section>
              <h4>{faq.question}</h4>

              {dropdown.includes(faq.id) ? (
                <AiOutlineMinusCircle
                  id={classes["icon"]}
                  onClick={() => handleOpen(faq.id)}
                />
              ) : (
                <AiOutlinePlusCircle
                  id={classes["icon"]}
                  onClick={() => handleOpen(faq.id)}
                />
              )}
            </section>
            {dropdown.includes(faq.id) && <p>{faq.answer}</p>}
          </div>
        ))}

      <section className={classes["faq-avatars"]}>
        <Image src={Avatar} alt="iLearnCloud" />
        <Image src={Avatar2} alt="iLearnCloud" />
        <Image src={Avatar3} alt="iLearnCloud" />
      </section>

      <h4 id={classes["faq-h2"]}>{title}</h4>
      <p id={classes["faq-p"]}>{subtitle}</p>
      <Link href="/contact-us">
        Get in touch
      </Link>
    </section>
  );
};

export default FaqPage;
