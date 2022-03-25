import React , { Fragment } from 'react';
import PropTypes from 'prop-types'

const Nodes = props => {
    const data = props.data;

    return (
        <Fragment>
            <section className="tf-section sc-explore-1 bg-style" id="network">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title style4 mg-bt-38">Our Network</h2>
                            <h5 className="sub-title help-center mg-bt-32 ">
                                Our wide range of dedicated servers are monitored 24/7 by our team to ensure our network is always up and always helping you earn rewards
                            </h5>
                        </div>
                        {
                            data.map((item,index) => (
                                <div key={index} className="fl-item col-lg-4 col-md-6 col-sm-6">
                                    <div className={`sc-card-product`}>
                                        <div className="meta-info">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img src={item.logo} alt="tedcrypto" />
                                                </div>
                                                <div className="info">
                                                    <span>Node</span>
                                                    <h6>{item.name}</h6>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <span>Current APR/APY</span>
                                                <h5>~{item.apr}%</h5>
                                            </div>
                                        </div>
                                        <div className="card-bottom center">
                                            {item.isEnabled && <button className="sc-button style wallet fl-button pri-3">
                                                <a href={item.stakeUrl} target="_blank">Stake</a>
                                            </button>}
                                            {item.isTest && <button className="sc-button style bag fl-button pri-3 no-bg">
                                                Testnet
                                            </button>}
                                            {!item.isTest && !item.isEnabled && <button className="sc-button style bag fl-button pri-3 no-bg">
                                                Coming Soon
                                            </button>}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    );
}



Nodes.propTypes = {
    data: PropTypes.array.isRequired,
}


export default Nodes;
