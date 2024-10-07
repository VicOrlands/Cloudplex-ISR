"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { LazyBackgroundImage } from "@/components/backgroundImage/bg";
import bgImg from "@/assets/events/events_description_background_pattern.png";

import Modal from "./modal/ImgModal";
import Footer from "../../footer/page";
import { EventsProps } from "../../arrays/eventsArray";

// types
type PageProps = {
  event: EventsProps;
};

type Modal = {
  id: number;
  open: Boolean;
};

const EventsDetails: React.FC<PageProps> = ({ event }) => {
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

  const coverImage: StaticImageData | undefined = event.eventImages.find(
    (_, idx) => idx === 0
  );

  const imagesPerPage = isMobile ? 1 : 6;
  const paginatedImages = event.eventImages.slice(
    currentPage * imagesPerPage,
    currentPage * imagesPerPage + imagesPerPage
  );

  const totalPages = Math.ceil(event.eventImages.length / imagesPerPage);

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
                __html: event.eventDescription || event.text,
              }}
            ></p>
          </div>
        </LazyBackgroundImage>
        <div className={styles["right-side"]}>
          <Image
            src={coverImage?.src || ""}
            alt="Array"
            height={coverImage?.height}
            width={coverImage?.width}
          />
          <div>
            <h1>{event.title}</h1>
            <h4>{event.date}</h4>
            <p>{event.eventLocation}</p>
          </div>
        </div>
      </section>

      <section className={styles["about-section"]}>
        {event.about && (
          <>
            <h2>About</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: event.about,
              }}
            ></p>
            <br />
            <br />
          </>
        )}

        {event.guestSpeakers && (
          <>
            <h2>Special Guests</h2>
            <p>{event.guestSpeakers}</p>
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

        {event.videoLink && (
          <div className={styles["video-player"]}>
            <Player
              playsInline
              aspectRatio="2.5:1"
              src={event.videoLink}
              poster={coverImage?.src}
            >
              <BigPlayButton position="center" />
            </Player>
          </div>
        )}

        <div className={styles["img-collage"]}>
          {paginatedImages.map((item, index) => (
            <div key={index} onClick={() => handleOpenModal(index)}>
              <Image src={item} alt="" />
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
          currentImg={state.id}
          selectImg={handleOpenModal}
          close={closeModal}
          imgArray={event.eventImages}
        />
      )}
    </main>
  );
};

export default EventsDetails;
