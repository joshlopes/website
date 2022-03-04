import React from 'react';
import { Link } from 'react-router-dom'
import walletIcon from '../../../assets/images/icon/Wallet.png'
import categoryIcon from '../../../assets/images/icon/Category.png'
import icon3 from '../../../assets/images/icon/Image2.png'
import icon4 from '../../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "Buy Crypto Your Way",
            description: "Buy and hold your crypto in your favourite wallet (non-exchange) like KEPLR, MetaMask, Trust Wallet, MyEtherWallet, WalletConnect, etc.",
            icon : walletIcon,
            colorbg : "icon-color1"
        },
        {
            title: "Find and Stake",
            description: "We make staking simple. Browse our node list, find your favourite, and stake. Can't find the one you want? Let us know on Discord and Telegram",
            icon : categoryIcon,
            colorbg : "icon-color2",
        },
        {
            title: "Get Rewards",
            description: "With us, your rewards will keep growing and growing. Claim your earnings at any time.",
            icon : icon3,
            colorbg : "icon-color3",
        },
        {
            title: "Govern",
            description: "We value our community and their opinion. Governance tab is optional, but we encourage you to become an active and vital member of your cosmos projects.",
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
