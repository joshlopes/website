import React from 'react';
import { Link } from 'react-router-dom'
import walletIcon from '../../../assets/images/icon/Wallet.png'
import categoryIcon from '../../../assets/images/icon/Category.png'
import icon3 from '../../../assets/images/icon/Image2.png'
import icon4 from '../../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "Buy your crypto",
            description: "Buy and hold your crypto in your favourite wallet (non-exchange) like KEPLR, MetaMask, Trust Wallet, MyEtherWallet, WalletConnect, etc.",
            icon : walletIcon,
            colorbg : "icon-color1"
        },
        {
            title: "Find and stake",
            description: "From our node list, find the node for your crypto and press stake. You don't find one? Join us in discord and telegram and suggest it so we start working on your validator!",
            icon : categoryIcon,
            colorbg : "icon-color2",
        },
        {
            title: "Rewards",
            description: "Your rewards will gradually increase over time and you can claim them at any time. Stake it again and earn more rewards over your rewards!",
            icon : icon3,
            colorbg : "icon-color3",
        },
        {
            title: "Govern",
            description: "Check your wallet page / software. From there you will find a governance tab where you can vote in the project proposals. It's optional but important to vote!",
            icon : icon4,
            colorbg : "icon-color4",
        },
    ]
    return (
        <section className="tf-box-icon create tf-section bg-home-3">
            <div className="themesflat-container">
                <div className="row">
                    {
                        data.map((item , index) => (
                            <CreateItem key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

const CreateItem = props => (
    <div className='col-lg-3 col-md-6 col-12'>
        <div className="sc-box-icon">
        <div className="image center">
            <div className={`icon-create ${props.item.colorbg}`}>
                    <img src={props.item.icon} alt="" />
                </div>
            </div>
        <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
        <p className="content">{props.item.description}</p>
    </div>
    </div>

)

export default Create;
