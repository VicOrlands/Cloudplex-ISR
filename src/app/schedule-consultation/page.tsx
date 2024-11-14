"use client"

import { useState } from 'react'
import styles from './styles.module.css'
import BgImg from "@/assets/schedule_consultation.webp"
import { LazyBackgroundImage } from '@/components/backgroundImage/bg';
import CalendlyEmbed from '@/components/CalendlyEmbed';

type StateProps = {
  name: string;
  email: string;
  message: string;
  company: string;
  employees: string;
  country: string;
  date: string;
  time: string;
}

const generateCalendlyUrl = (formData: StateProps): string => {
  const baseUrl = 'https://calendly.com/chimezie-cloudplexo/30min';

  const formatDate = (dateString: string): { datetime: string; month: string; date: string } => {
    if (!dateString) return { datetime: '', month: '', date: '' };

    const date = new Date(dateString);
    const monthStr = (date.getMonth() + 1).toString().padStart(2, '0');
    const yearMonth = `${date.getFullYear()}-${monthStr}`;
    const fullDate = `${yearMonth}-${date.getDate().toString().padStart(2, '0')}`;

    return {
      datetime: `${formData.date}T${formData.time}`,
      month: yearMonth,
      date: fullDate,
    };
  };

  const dateInfo = formatDate(formData.date);
  const params = new URLSearchParams({
    name: formData.name,
    email: formData.email,
    a1: `Company:  ${formData.company}\nNo of Employees:  ${formData.employees}\nCountry: ${formData.country}\nMessage: ${formData.message}`,
    back: '1',
    month: dateInfo.month,
    date: formData.date,
    time: formData.time
  });

  return `${baseUrl}/${dateInfo.datetime}?${params.toString().replace(/\+/g, '%20')}`;
};

export default function ConsultationPage() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [formData, setFormData] = useState<StateProps>({
    name: '',
    email: '',
    message: '',
    company: '',
    employees: '',
    country: '',
    date: '',
    time: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setShowCalendly(true);
    } catch (err: any) {
      console.error('Scheduling error:', err)
    }
  }

  return (
    <div className={!showCalendly ? styles.container : styles.calendlyContainer}>
      <div className={styles.formSection}>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>Schedule Free Consultation</h1>

          {showCalendly ? (
            <div className={styles.calendly}>
              <CalendlyEmbed url={generateCalendlyUrl(formData)} />
            </div>
          ) :
            (<form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="date">Select Date & Time</label>
                <div className={styles.dateTimeWrapper}>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    placeholder="Select date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className={styles.dateInput}
                  />
                  <input
                    id="time"
                    name="time"
                    type="time"
                    placeholder="Select time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className={styles.timeInput}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please share anything that will help prepare for our meeting."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={styles.textarea}
                />
              </div>

              <div className={styles.rowGroup}>
                <div className={styles.inputGroup}>
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Enter your company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="employees">Number of employees</label>
                  <input
                    id="employees"
                    name="employees"
                    type="text"
                    placeholder="Enter number of employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="country">Country</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Enter your country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
              >
                Schedule Consultation
              </button>
            </form>
            )}

          <footer className={styles.footer}>
            <p>© CloudPlexo 2024</p>
            <p><ContactIcon style={{ marginRight: "5px" }} />contact@cloudplexo.com</p>
          </footer>
        </div>
      </div>

      <LazyBackgroundImage src={BgImg} className={styles.heroSection}>
        <div className={styles.heroContent}>
          <StarIcon />
          <h2>Make the Cloud Feel Like Home</h2>
          <p>We'll guide you every step of the way. Let's dive in and create <br />something incredible together!</p>
        </div>
      </LazyBackgroundImage>
    </div>
  )
}

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M0 40c25.425 0 40-14.575 40-40 0 25.425 14.575 40 40 40-25.425 0-40 14.575-40 40 0-25.425-14.575-40-40-40"
      clipRule="evenodd"
    ></path>
    <path
      fill="#FEC84B"
      fillRule="evenodd"
      d="M0 12c7.627 0 12-4.373 12-12 0 7.627 4.373 12 12 12-7.627 0-12 4.373-12 12 0-7.627-4.373-12-12-12m64 12c5.085 0 8-2.915 8-8 0 5.085 2.915 8 8 8-5.085 0-8 2.915-8 8 0-5.085-2.915-8-8-8"
      clipRule="evenodd"
    ></path>
  </svg>
);

const ContactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="none">
    <path
      stroke="#717680"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.333"
      d="m1.333 2.667 5.444 3.81c.44.309.66.463.9.523.212.052.434.052.646 0 .24-.06.46-.214.9-.523l5.444-3.81M4.534 11.333h6.933c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.427.218-.987.218-2.108V3.867c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874c-.428-.218-.988-.218-2.108-.218H4.533c-1.12 0-1.68 0-2.107.218a2 2 0 0 0-.875.874c-.218.428-.218.988-.218 2.108v4.266c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .875.874c.427.218.987.218 2.107.218Z"
    ></path>
  </svg>
);