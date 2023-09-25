import React, { useRef, useState } from "react";
import "./contact.css";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { BiMailSend } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { type } from "@testing-library/user-event/dist/type";

const Contact = () => {
  const form = useRef();

function timeout() {
    return new Promise( res => setTimeout(res, 3000) );
}
   const sendEmail = (e) => {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_u8w6h3c', 'template_4vehusl', e.target, 'Qsu_mD67AYlq_ZBAX')
      .then(async (result) => {
 await toast("Thank you for contact us"); 
   await timeout();
 window.location.reload()  ; 
      console.log(result.text);
         
          //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <BiMailSend className="contact_option_icon" />
            <h4>Email</h4>
            <h5>contact@ahmedghaith.com</h5>
            <a
              href="mailto:contact@ahmedghaith.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
       
          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>Whatsapp</h4>
            <h5>+201032821611</h5>
            <a
              href="https://api.whatsapp.com/?phone?=+201032821611"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
        name="from_name"
            placeholder="Your Full Name"
            required
          />
          <input type="email"  name="reply_to" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your message here"
            required
          ></textarea>
          <button type="submit" value="Send" className="btn btn_primary">
            Send Message
          </button>
                  <ToastContainer />

        </form>
      </div>
    </section>
  );
};

export default Contact;
