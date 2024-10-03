"use client";

import React, { useState, useRef, useEffect } from "react";
import { GrFormClose } from "react-icons/gr";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "./modal.module.css";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

type EventsProps = {
  currentImg: number;
  close: () => void;
  selectImg: (id: number) => void;
  imgArray: StaticImageData[];
};

export default function Modal({
  currentImg,
  selectImg,
  close,
  imgArray,
}: EventsProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);

  const fetchCurrentImg: StaticImageData | undefined = imgArray.find(
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
          <h4>Close</h4>
        </div>
        <h2>Unlocking Digital Transformation in Nigeria's Public Sector </h2>

        <section className={styles["img"]}>
          <Image
            src={fetchCurrentImg?.src || ""}
            alt="placeholder"
            width={fetchCurrentImg?.width}
            height={fetchCurrentImg?.height}
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
              <div key={idx} onClick={() => selectImg(idx)}>
                <Image src={item} alt="placeholder" />
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
