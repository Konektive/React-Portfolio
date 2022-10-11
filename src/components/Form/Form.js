import React, { useState } from "react";
import emailjs from "emailjs-com";
import classes from "./Form.module.css";
import { AiOutlineClose } from "react-icons/ai";

const Modal = (props) => {
  const [respond, setRespond] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qdly7mf",
        "template_x07vgqp",
        e.target,
        "4D6uJabpuMjrjLriF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setRespond(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className={classes.modal}>
        {respond === "OK" ? null : (
          <div onClick={props.showForm} className={classes.overlay}></div>
        )}
        {respond === "OK" ? null : (
          <div className={classes.content}>
            <form onSubmit={sendEmail}>
              <div>
                <input type="text" placeholder="Name" name="name" required />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  required
                />
              </div>
              <div>
                <input type="email" placeholder="Email" name="email" required />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Your message"
                  name="message"
                  required
                />
              </div>
              <div>
                <input
                  className={classes.submit}
                  type="submit"
                  value="Send Message"
                />
              </div>
              <div>
                <button className={classes.closeModal} onClick={props.showForm}>
                  <AiOutlineClose />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
