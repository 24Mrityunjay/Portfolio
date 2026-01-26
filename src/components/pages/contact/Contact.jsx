import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RiMailSendFill, RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp, FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0uamdza', 'template_nnehklp', form.current, {
        publicKey: 'k0Lf6-rN_oAqHy-Q0',
      })
      e.target.reset();
  };

    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Get in touch</h2>
            <p className="section-subtitle">Contact Me</p>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <RiMailSendFill />
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">54mrityunjay@gmail.com</span>

                            {/* <a href="" className="contact__button">
                                Write me{" "}
                                →
                            </a> */}

                        </div>

                        <div className="contact__card">
                            <FaWhatsapp />
                            <h3 className="contact__card-title">Whatsap</h3>
                            <span className="contact__card-data">7081663605</span>

                            {/* <a href="" className="contact__button">
                                Write me{" "}
                                →
                            </a> */}

                        </div>

                        <div className="contact__card">
                            <RiMessengerLine />
                            <h3 className="contact__card-title">LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/mrityunjay-yadav/" target='_blank' className="contact__card-data">Mrityunjay Yadav</a>

                            {/* <a href="anywhere" className="contact__button">
                                Write me{" "}
                                →
                            </a> */}

                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Insert your name"
                            />
                        </div>
                         <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input
                                type="email"
                                name="name"
                                className="contact__form-input"
                                placeholder="Insert your email"
                            />
                        </div>
                         <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea
                                type="text"
                                name="project"
                                cols={30}
                                rows={10}
                                className="contact__form-input"
                                placeholder="Write your project"
                            />
                        </div>

                        <button className='button button-flex'>
                            Send Message !
                        </button>
                    </form>

                </div>
            </div>
        </section>

    )
}

export default Contact