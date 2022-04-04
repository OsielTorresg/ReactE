import React from "react";
class Contact extends React.Component {
  render() {
    return (
      <section className="contact-section">
        <h1>CONTACT US</h1>
        <form
          className="contact-form"
          action="index.html"
          onSubmit="return validationForm()"
          method="post"
        >
          <input
            type="text"
            className="contact-form-text"
            placeholder="Your name"
          />
          <input
            type="email"
            className="contact-form-text"
            placeholder="Your Email"
          />
          <input
            type="text"
            className="contact-form-text"
            placeholder="Your Phone"
          />
          <textarea
            className="contact-form-text"
            placeholder="Your Message"
          ></textarea>
          <input type="submit" className="contact-form-btn" value="send" />
        </form>
      </section>
    );
  }
}
export default Contact;
