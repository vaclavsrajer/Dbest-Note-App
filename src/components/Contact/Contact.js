import React from "react";
import "./Contact.css";

const CONSTANTS = {
  NAME: "name",
  EMAIL: "email",
  TITLE: "title",
  MESSAGE: "message",
};

export default function Contact({ setShowPopup }) {
  const [contact, setContact] = React.useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [error, setError] = React.useState({
    errorOn: false,
    errorMessage: "TEST",
  });

  function handleChange(event) {
    const { id, value } = event.target;
    setContact((prev) => ({ ...prev, [id]: value }));
  }

  React.useEffect(() => {
    if (error.errorOn) {
      setTimeout(() => {
        setError({});
      }, 5000);
    }
  }, [error]);

  function handleSubmit() {
    for (const key in contact) {
      if (contact[key].length < 1) {
        return setError({
          errorOn: true,
          errorMessage: "You did not fill all fields",
        });
      }
    }
    const nameLettersOnlyRegex = /^[a-zA-Z]+$/;
    if (nameLettersOnlyRegex.test(contact.name)) {
      return setError({
        errorOn: true,
        errorMessage: "Name can not have any numbers in it",
      });
    }
    const emailValidationRegex = /^\S+@\S+\.\S+$/;
    if (!contact.email.toLowerCase().match(emailValidationRegex)) {
      return setError({
        errorOn: true,
        errorMessage: "Email is not in email format",
      });
    }

    setShowPopup({ showPopup: true, message: "Successfully submitted" });
  }

  return (
    <div className="contanct-container">
      <h3 className="contact-header">Contact</h3>
      {error.errorOn ? <p className="error">{error.errorMessage}</p> : ""}
      <div className="contact-name-email">
        <label>
          Name*
          <input
            type="text"
            id="name"
            value={contact.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email*
          <input
            type="email"
            id="email"
            value={contact.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <label>
        Title
        <input
          type="text"
          id="title"
          value={contact.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Your Message
        <textarea
          type="text"
          id="message"
          value={contact.message}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>Post Comment</button>
    </div>
  );
}
