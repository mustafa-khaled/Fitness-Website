import styles from "./contact.module.css";

const Second = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${styles.second}  container sections-padding`}>
      <div>
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
      <div>
        <h2>Send Us a Message</h2>
        <p>Your email address will not be published *</p>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea name="" placeholder="Massage"></textarea>
          <button onClick={() => formHandler()} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Second;
