import { useState } from "react";
import styles from "./contact.module.css";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [massage, setMassage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    if (!fullName || !email || !subject) {
      setErrorMessage("Please fill in all fields.");
      return;
    } else {
      setFullName("");
      setEmail("");
      setSubject("");
      setMassage("");
      setErrorMessage("Send Successfully");
    }
  };

  return (
    <div className={`${styles["contact-form"]}  container sections-padding`}>
      <div data-aos="fade-down">
        <p className="paragraph">Welcome To strengthy</p>
        <h2>Get In Touch With Us</h2>
        <p>
          If you have any feedback or questions about our clubs, our website or
          our services in general, please contact us by filling out the form.
        </p>
        <h3>Open Hours</h3>
        <p>
          <span>Mon – Fri :</span> 08.00 aM to 09.00 pM
        </p>
        <p>
          <span>Sat :</span> 09.00 AM To 06.00 PM
        </p>
        <p>
          <span>sunday :</span> 09.00 AM To 02.00 PM
        </p>
      </div>
      <div data-aos="fade-up">
        <h2>Send Us a Message</h2>
        <p>Your email address will not be published *</p>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            name=""
            placeholder="Massage"
            value={massage}
            onChange={(e) => setMassage(e.target.value)}></textarea>
          <button onClick={(e) => formHandler(e)} type="submit">
            Submit
          </button>
          <p>{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
