import Link from "next/link";
import styles from "./styles.module.css"

function PricingModule() {
  return (
    <section className={styles["pricing-page"]}>
      <h2>Pricing</h2>

      <div className={styles["pricing-tab"]}>
        <div>
          <h3><i>{Business}</i>Business Essential</h3>
          <p>
            Backup Desktops, laptops, think-clients, servers and more{" "}
          </p>

          <h4>What's Included</h4>
          <ul>
            <li>
              <i>{tick}</i>
              License per user/machine
            </li>
            <li>
              <i>{tick}</i>
              Bank level security and encryption
            </li>
            <li>
              <i>{tick}</i>
              Backup to AWS, Azure or Google Cloud
            </li>
            <li>
              <i>{tick}</i>
              Restore from AWS, Azure or Google Cloud
            </li>
            <li>
              <i>{tick}</i>
              Premium Support
            </li>
            <li>
              <i>{tick}</i>
              <span>Cloud-Native</span>
            </li>
          </ul>

          <Link href="/contact-us">
            Contact Us
          </Link>
        </div>

        <div>
          <h3><i>{Enterprise}</i>Enterprise</h3>
          <p>Enterprise backup and restore</p>

          <h4>What's Included</h4>
          <ul>
            <li>
              <i>{tick2}</i>
              All in Business Essential
            </li>
            <li>
              <i>{tick2}</i>
              Dedicated Backup Specialist
            </li>
            <li>
              <i>{tick2}</i>
              Dedicated Account Manager
            </li>
            <li>
              <i>{tick2}</i>
              <span>Storage Explorer</span>
            </li>
          </ul>

          <Link href="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PricingModule;

// icons
const tick = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
      fill="white"
    />
    <path
      d="M7.1167 13.8405L10.4785 17.2023L18.8831 8.79773"
      stroke="#516BEB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const tick2 = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z"
      fill="#344054"
    />
    <path
      d="M7.1167 13.8405L10.4785 17.2023L18.8831 8.79773"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Business = (
  <svg
    width="62"
    height="62"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="72" height="72" rx="16" fill="white" />
    <rect x="17" y="17" width="18.4865" height="38" fill="#344054" />
    <rect x="35.4863" y="17" width="19.5135" height="38" fill="#B8B1FF" />
    <rect
      x="35.4863"
      y="35.4863"
      width="19.5135"
      height="19.5135"
      fill="#DCD8FF"
    />
  </svg>
);

const Enterprise = (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="72" height="72" rx="16" fill="#ECEBFF" />
    <path
      d="M57.1639 46.6464L57.1732 46.6413H57.1551L46.5288 40.8833L35.8849 35.1152L25.2405 40.8833L14.6143 46.6413H14.5962L14.6054 46.6464L14.5962 46.6515H14.6143L25.2405 52.4094L35.8849 58.1775L46.5288 52.4094L57.1551 46.6515H57.1732L57.1639 46.6464Z"
      fill="#DCD8FF"
    />
    <path
      d="M57.1639 24.5312L57.1732 24.5265H57.1551L46.5288 18.7681L35.8849 13L25.2405 18.7681L14.6143 24.5265H14.5962L14.6054 24.5312L14.5962 24.5362H14.6143L25.2405 30.2946L35.8849 36.0627L46.5288 30.2946L57.1551 24.5362H57.1732L57.1639 24.5312Z"
      fill="#344054"
    />
    <path
      d="M14.6143 24.0625V47.1151L35.8849 35.589L14.6143 24.0625Z"
      fill="#B8B1FF"
    />
    <path
      d="M57.155 24.0625V47.1151L35.8848 35.589L57.155 24.0625Z"
      fill="#B8B1FF"
    />
  </svg>
);