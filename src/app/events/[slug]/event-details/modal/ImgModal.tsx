"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import styles from "./modal.module.css";

type EventsProps = {
  title: string;
  currentImg: number;
  close: () => void;
  selectImg: (id: number) => void;
  imgArray: string[];
};

export default function Modal({
  title,
  currentImg,
  selectImg,
  close,
  imgArray,
}: EventsProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);

  const fetchCurrentImg = imgArray.find(
    (_, idx) => idx === currentImg
  );

  const scrollImages = (direction: "left" | "right") => {
    if (footerRef.current) {
      const scrollAmount = 165;
      const newPosition =
        direction === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;

      footerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  useEffect(() => {
    if (footerRef.current) {
      footerRef.current.scrollTo({
        left: currentImg * 165,
        behavior: "smooth",
      });
      setScrollPosition(currentImg * 165);
    }
  }, [currentImg]);

  return (
    <section className={styles["modal"]}>
      <section className={styles["modal-content"]}>
        <div className={styles["close-div"]} onClick={close}>
          <GrFormClose size={24} color="#475467" />
        </div>
        <h2>{title}</h2>

        <section className={styles["img"]}>
          <Image
            src={fetchCurrentImg || ""}
            alt="placeholder"
            width={300}
            height={300}
          />
        </section>

        <section className={styles["footer"]}>
          <MdKeyboardArrowLeft
            className={styles["icon"]}
            onClick={() => scrollImages("left")}
          />
          <section
            ref={footerRef}
            className={
              imgArray.length <= 5
                ? clsx(
                  styles["image-scroll-container"],
                  styles["flex-center"]
                )
                : styles["image-scroll-container"]
            }
          >
            {imgArray.map((item, idx) => (
              <div key={item + idx} onClick={() => selectImg(idx)}>
                <Image src={item} alt="placeholder" width={300} height={300} />
              </div>
            ))}
          </section>
          <MdKeyboardArrowRight
            className={clsx(styles["icon"], styles["icon-right"])}
            onClick={() => scrollImages("right")}
          />
        </section>
      </section>
    </section>
  );
}
