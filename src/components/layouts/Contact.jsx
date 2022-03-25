import img1 from "../../assets/images/blog/thumb-8.png";
import axios from 'axios';
import React from "react";

const Contact = () => {
    const [state, setState] = React.useState({
        btnText: "Send",
        disabled: false,
        timer: null,
    });

    async function handleSubmit(e) {
        e.preventDefault();
        if (state.timer) {
            clearTimeout(state.timer);
        }
        setState({disabled: true, btnText: "Sending..."});

        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const subject = e.target.elements.subject.value;
        const message = e.target.elements.message.value;

        if (!name || !email || !subject || !message) {
            setState({disabled: false, btnText: "Fill all required inputs!"});
            state.timer = setTimeout(() => {
                setState({disabled: false, btnText: "Send"});
            }, 3000);
            return;
        }

        const webhookUrl = 'https://discord.com/api/webhooks/946800971135197194/HVKFqMYeA7hnW5LLQy6p1rKsYYJmmAEFeJmUdC6mkAjUDbXm33NwpvAns0jitymipZOU';

        const data = {
            "content": "[Web Contact Form]\n\n**Name:** " + name + "\n**Email:** " + email + "\n**Subject:** " + subject + "\n\n**Message:** \n" + message
        }

        const res = await axios.post(webhookUrl, data);
        if (res.status > 200 && res.status < 300) {
            setState({disabled: true, btnText: "Message sent!"});
        } else {
            setState({disabled: false, btnText: "Failed to send message! Try again."});
            state.timer = setTimeout(() => {
                setState({disabled: false, btnText: "Send"});
            }, 3000);
        }
    }

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
                        Get in Touch!
                    </h2>
                    <h5 className="sub-title style-1">
                        We're always open to feedback and new ideas. If you need a quick response, come and join our Telegram and Discord!
                    </h5>
                    <div className="form-inner">
                        <form id="contactform" noValidate="novalidate" className="form-submit" onSubmit={(e) => handleSubmit(e)}>
                            <input id="name" name="name" tabIndex="1" aria-required="true" type="text"
                                   placeholder="Full Name" required/>
                            <input id="email" name="email" tabIndex="2" aria-required="true" type="email"
                                   placeholder="Email Address" required/>
                            <div className="row-form style-2" id="subject">
                                <select name="subject">
                                    <option value="Problem Staking">Problem Staking</option>
                                    <option value="Report Validator">Report validator</option>
                                    <option value="Other">Other</option>
                                </select>
                                <i className="icon-fl-down"></i>
                            </div>
                            <textarea id="message" name="message" tabIndex="3" aria-required="true" required
                                      placeholder="Message"></textarea>
                            <button className="submit" name="button" disabled={state.disabled}>
                                {state.btnText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Contact;
