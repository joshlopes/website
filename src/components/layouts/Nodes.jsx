import React , { Fragment } from 'react';
import PropTypes from 'prop-types'
import Node from "../Node/Node";

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
                        {data.map((item,index) => <Node key={index} info={item} />)}
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
