"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";
import bgImg from "@/assets/events/events_description_background_pattern.webp";

import Modal from "./modal/ImgModal";
import Footer from "../../footer/page";
import { EventProps } from "../../page";
import { formatDate } from "@/lib/utils";
// import VideoPlayer from "@/components/videoPlayer/VideoPlayer";

type Modal = {
  id: number;
  open: Boolean;
};

const EventsDetails: React.FC<EventProps> = (props) => {
  const { about, date, title, images, videos, location, description } = props

  const videoLink = "https://cloudplexo.com/SMFEST-Founders-Mixer.mp4"

  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [state, setState] = useState<Modal>({
    open: false,
    id: 0,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // this is to set the pagination to 1 for mobile devices
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeModal = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const handleOpenModal = (id: number) => {
    setState({
      open: true,
      id,
    });
  };

  const imagesPerPage = isMobile ? 1 : videos ? 6 : 9;
  const paginatedImages = images.slice(
    currentPage * imagesPerPage,
    currentPage * imagesPerPage + imagesPerPage
  );

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  if (!isClient) {
    return (
      <div className={styles["top-section"]}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className={styles["events-description"]}>
      <section className={styles["top-section"]}>
        <LazyBackgroundImage src={bgImg} className={styles["bgImg"]}>
          <div className={styles["left-side"]}>
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></p>
          </div>
        </LazyBackgroundImage>
        <div className={styles["right-side"]}>
          {images.length > 0 && (
            <Image
              src={images[0]}
              alt="Array"
              height={300}
              width={300}
            />
          )}
          <div>
            <h1>{title}</h1>
            <h4>{formatDate(date)}</h4>
            <p>{location}</p>
          </div>
        </div>
      </section>

      <section className={styles["about-section"]}>
        {about && (
          <>
            <h2>About</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: about,
              }}
            ></p>
            <br />
            <br />
          </>
        )}

        <div className={styles["flex-header"]}>
          <h2>Gallery</h2>
          <Link href={"/events"}>
            <button type="button">View upcoming events</button>
          </Link>
        </div>

        {/* {videoLink && (
          <div className={styles["video-player"]}>
            <VideoPlayer
              src={videoLink}
              poster={videoThumbnail?.src || coverImage?.src}
            />
          </div>
        )} */}

        <div className={styles["img-collage"]}>
          {paginatedImages.map((item, index) => (
            <div key={item} onClick={() => handleOpenModal(index)} className={videoLink ? styles.sixImages : styles.nineImages}>
              <Image src={item} alt={title} width={300} height={300} />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className={styles["pagination"]}>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
              aria-label="Previous Page"
            >
              <MdArrowBack />
            </button>
            <span>{`Page ${currentPage + 1} of ${totalPages}`}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              aria-label="Next Page"
            >
              <MdArrowForward />
            </button>
          </div>
        )}
      </section>

      <Footer />

      {state.open && (
        <Modal
          title={title}
          currentImg={state.id}
          selectImg={handleOpenModal}
          close={closeModal}
          imgArray={images}
        />
      )}
    </main>
  );
};

export default EventsDetails;
