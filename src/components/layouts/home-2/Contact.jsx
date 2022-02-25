import img1 from "../../../assets/images/blog/thumb-8.png";
import React from "react";

const Contact = () => {
    return (
        <section className="tf-contact tf-section" id="Contact">
        <div className="themesflat-container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="box-feature-contact">
                        <img src={img1} alt="TedCrypto Contact"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <h2 className="tf-title-heading style-2 mg-bt-12">
                        Drop Up A Message
                    </h2>
                    <h5 className="sub-title style-1">
                        We will try to reply as soon as possible. You should always prefer contact us through
                        Telegram and Discord. We are always open to discuss new ideas and new projects.
                    </h5>
                    <div className="form-inner">
                        <form id="contactform" noValidate="novalidate" className="form-submit">
                            <input id="name" name="name" tabIndex="1" aria-required="true" type="text"
                                   placeholder="Your Full Name" required/>
                            <input id="email" name="email" tabIndex="2" aria-required="true" type="email"
                                   placeholder="Your Email Address" required/>
                            <div className="row-form style-2" id="subject">
                                <select>
                                    <option value="1">Problem Staking</option>
                                    <option value="2">Report validator</option>
                                    <option value="3">Other</option>
                                </select>
                                <i className="icon-fl-down"></i>
                            </div>
                            <textarea id="message" name="message" tabIndex="3" aria-required="true" required
                                      placeholder="Message"></textarea>
                            <button className="submit">Send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Contact;
