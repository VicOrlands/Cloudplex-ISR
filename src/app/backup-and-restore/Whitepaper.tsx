import { FiArrowRight } from "react-icons/fi";
import image from "@/assets/backup/whitepaper.png";
import Link from "next/link";
import Image from "next/image";

function Whitepaper() {
  return (
    <section className="whitepaper">
      <div className="whitepaper-card">
        <div className="whitepaper-cardImage">
          <Image
            src={image}
            alt="How Secure is Your Data"
          />
        </div>

        <div className="whitepaper-cardContent">
          <p>How Secure is Your Data?</p>
        </div>
      </div>
      <p>Get the latest insights and trends on Cloud Security and Recovery.</p>
      <Link href="/whitepaper">
        View Whitepaper{" "}
        <i className="ml-3">
          <FiArrowRight />
        </i>
      </Link>
    </section>
  );
}

export default Whitepaper;
