import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import communitiesData from '../../../assets/fake-data/communities';

const Communities = () => {
    const [data] = useState(communitiesData);

    const [visible , setVisible] = useState(6);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }
    return (
        <section className="tf-section our-creater dark-style2" id="community">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="tf-title style4 mg-bt-38">Communities</h2>
                        <h5 className="sub-title help-center mg-bt-32 ">
                            We would like to welcome everyone to be part of a bigger family! Portuguese is our main language
                            but we are always open to new languages and we will support you in your crypto journey.
                        </h5>
                    </div>
                    {
                        data.slice(0,visible).map((item,index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-12">
                                <div className="sc-card-collection style-2">
                                    <div className="card-bottom">
                                        <div className="author">
                                            <div className="sc-author-box style-2">
                                                <div className="author-avatar">
                                                    <img src={item.imgAuthor} alt="Axies" className='avatar' />
                                                    <div className="badge"></div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h4><Link to="/author-02">{item.name}</Link></h4>
                                                <div className="infor">
                                                    <span>{item.description}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={item.link} className="sc-button fl-button pri-3"><span>{item.buttonLabel}</span></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {
                        visible < data.length &&
                        <div className="col-md-12 wrap-inner load-more text-center">
                            <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default Communities;
