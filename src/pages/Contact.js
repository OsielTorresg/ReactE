import React from "react";
class Contact extends React.Component {
  render() {
    return (
      <section class="contact-section">
        <h1>CONTACT US</h1>
        <form
          class="contact-form"
          action="index.html"
          onSubmit="return validationForm()"
          method="post"
        >
          <input
            type="text"
            class="contact-form-text"
            placeholder="Your name"
          />
          <input
            type="email"
            class="contact-form-text"
            placeholder="Your Email"
          />
          <input
            type="text"
            class="contact-form-text"
            placeholder="Your Phone"
          />
          <textarea
            class="contact-form-text"
            placeholder="Your Message"
          ></textarea>
          <input type="submit" class="contact-form-btn" value="send" />
        </form>
      </section>
    );
  }
}
export default Contact;
