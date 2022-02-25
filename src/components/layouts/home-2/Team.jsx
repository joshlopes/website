import React from "react";
import JoshLopes from "../../../assets/images/team/josh_lopes.jpg";
import Deke from "../../../assets/images/team/deke.jpg";
import Bt from "../../../assets/images/team/bt.jpg";

const Team = () => {
    return (
        <section className="tf-contact tf-section bg-style" id="team">
        <div className="themesflat-container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="tf-title style4 mg-bt-38">Team</h2>
                    <h5 className="sub-title help-center mg-bt-32 ">
                        We are fastly growing, with different backgrounds from IT, Marketing and Design. Brought together by crypto
                        with only one goal, to bring crypto to more people. Always looking for more talented people, Join Us!
                    </h5>
                </div>
                <div className="sc-card-activity style-2 col-12">
                    <div className="content">
                        <div className="media">
                            <img src={JoshLopes} alt="" />
                        </div>
                        <div className="infor">
                            <h4>Josh_Lopes</h4><br/>
                            <p>
                                Luis, 32 years old, is a software engineer and a crypto enthusiast.<br/>
                                Living in Portugal.<br/>
                                Having worked +10 Years in e-commerce companies.<br />
                                Started his own startup in 2018 for digital consultancy.
                            </p><br/>
                            <p>
                                "I'm very passionated about open source projects and open world
                                with the right mindset. I do believe in the potential of Crypto in the world and
                                I'm very excited to see how it will impact the world."
                            </p><br/>
                            <h5>Founder of TedCrypto</h5>
                        </div>
                    </div>
                </div>

                <div className="sc-card-activity style-2 col-12">
                    <div className="content">
                        <div className="media">
                            <img src={Deke} alt="" />
                        </div>
                        <div className="infor">
                            <h4>D3k3</h4><br/>
                            <p>
                                José, 34 years old, is a sxxx and a crypto enthusiast.<br/>
                                Living in France.<br/>
                                Started is journey in crypto in 2017, with a vast experience in finance
                                and different blockchain projects.
                            </p><br/>
                            <p>
                                "I believe in give more than receive"
                            </p><br/>
                            <h5>Founder of TedCrypto</h5>
                        </div>
                    </div>
                </div>

                <div className="sc-card-activity style-2 col-12">
                    <div className="content">
                        <div className="media">
                            <img src={Bt} alt="" />
                        </div>
                        <div className="infor">
                            <h4>BT</h4><br/>
                            <p>
                                Rafael, 34 years old, is a sxxx and a crypto enthusiast.<br/>
                                Living in France.<br/>
                                José's friend both started to share the same passion about crypto.
                            </p><br/>
                            <p>
                                "I believe in give more than receive"
                            </p><br/>
                            <h5>Blockinvest blogger / Community Manager</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </section>
    );
}

export default Team;
