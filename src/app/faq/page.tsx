"use client"

import Link from "next/link";
import Image from "next/image";
import { FAQ } from "./questions";
import React, { useState } from "react";
import classes from "./faq.module.css";
import Avatar from "@/assets/aws_dynamoDb/Avatar.png";
import Avatar2 from "@/assets/aws_dynamoDb/Avatar1.png";
import Avatar3 from "@/assets/aws_dynamoDb/Avatar2.png";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const MainFaq: React.FC = () => {
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
      <h2>Frequently asked questions</h2>
      <h6>Answers to Common Queries</h6>

      {FAQ.map((faq) => (
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

      <h4 id={classes["faq-h2"]}>Still have questions?</h4>
      <p id={classes["faq-p"]}>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
      <Link href="/contact-us">
        Get in touch
      </Link>
    </section>
  );
};

export default MainFaq;
