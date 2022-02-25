import React , { useState , Fragment } from 'react';
import PropTypes from 'prop-types'
import CardModal from '../CardModal';

const Nodes = props => {
    const data = props.data;

    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <section className="tf-section sc-explore-1 bg-style" id="network">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title style4 mg-bt-38">Our network</h2>
                            <h5 className="sub-title help-center mg-bt-32 ">
                                We have a wide range of servers in dedicated datacenters, monitoring tools and a team that works around the clock to ensure that these
                                servers are always up and running.
                            </h5>
                        </div>
                        {
                            data.map((item,index) => (
                                <div key={index} className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                <h5>{item.apr}</h5>
                                            </div>
                                        </div>
                                        <div className="card-bottom center">
                                            {item.isEnabled && <button className="sc-button style bag fl-button pri-3 no-bg">
                                                <a href={item.stakeUrl} target="_blank">Stake</a>
                                            </button>}
                                            {!item.isEnabled && <button className="sc-button style bag fl-button pri-3 no-bg">
                                                Comming soon
                                            </button>}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Fragment>
    );
}



Nodes.propTypes = {
    data: PropTypes.array.isRequired,
}


export default Nodes;
