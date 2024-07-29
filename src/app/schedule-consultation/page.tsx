"use client"

import { useState } from "react";
import 'react-clock/dist/Clock.css';
import styles from "./styles.module.css"
import 'react-calendar/dist/Calendar.css';
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Consultation = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className={styles["download-canvas"]}>
      <section className={styles["consult-nav"]}>
        <h1>Book a free consultation</h1>
      </section>

      <section className={styles["consult-service"]}>
        <div className={styles["consult-calendar"]}>
          <h3>Service Info</h3>
          <h4>Capacity: 1 Duration 1h</h4>
          <p>Pick a date & time</p>

          <div>
            <DateTimePicker onChange={onChange} value={value} />
          </div>
        </div>

        <div className={styles["consult-form"]}>
          <h3>Schedule Free Consultation</h3>
          <h4>
            Employee: CloudPlexo <br />
            Date: {new Date().toDateString()} <br /> Local Time: {new Date().toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            })}
          </h4>

          <form>
            <label htmlFor="name">
              Full Name
              <input type="text" name="name" />
            </label>

            <label htmlFor="email">
              Email
              <input type="email" name="email" />
            </label>

            <label htmlFor="number">
              Phone Number
              <input type="text" name="number" />
            </label>

            <label htmlFor="company">
              Company
              <input type="text" name="company" />
            </label>

            <label htmlFor="employee">
              Number of company employees
              <input type="text" name="employee" />
            </label>

            <label htmlFor="country">
              Country
              <input type="text" name="country" />
            </label>

            <button type="button" aria-label="cancel" className="left">
              Cancel
            </button>
            <button type="submit" aria-label="submit" className="right">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
