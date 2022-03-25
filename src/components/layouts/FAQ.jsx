import React , { useState } from 'react';
import { Accordion } from 'react-bootstrap-accordion'

const FAQ = () => {
    const [data] = useState(
        [
            {   key: "0",
                show: "show",
                title: 'How can I stake with TedCrypto?',
                text: 'You can stake by going to our network / nodes and select one validator for your tokens. Delegate and start earning! Thanks for your support.'
            },
            {
                key: "1",
                title: 'Can I lose crypto by staking?',
                text: 'Hardly you will lose crypto staking. You can only lose if the node/validator is not working properly and gets jailed. Crypto you stake remains yours and we (validators) don\'t have access to it'
            },
            {
                key: "2",
                title: 'Can I withdraw my crypto?',
                text: 'You can always withdraw your delegated crypto, but it will take some days to process it depending on the network. Usually is around 15 days but can take more.'
            },
            {
                key: "3",
                title: 'Can I re-delegate after already delegating my crypto?',
                text: 'Yes, most of the networks allows you to re-delegate your tokens without having to wait. This is perfect to keep delegation power split between all validators. No validator should have the majority of power as that can compromise governance/voting system and the project!'
            },
            {
                key: "4",
                title: 'How do I earn crypto?',
                text: 'Proof of stake, aims to promote staking to validators so you keep the network alive whilst holding to your tokens. This mechanism also allows delegators to earn a % of rewards for the tokens they delegate.'
            },
            {
                key: "5",
                title: 'What is this "commission"?',
                text: 'Comissions are the amount of tokens that are taken by the validator in your rewards. This is to cover costs running the nodes/network. We will always charge you the average commission. Some nodes have 0% commission, but not only you can run into problems with it, they also make it unfair for others as running validators do have a cost. They are also excluded from airdrops most of the times.'
            },
        ]
    )
    return (
            <section className="tf-section wrap-accordion" id="FAQ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                                Frequently Asked Questions
                            </h2>
                            <h5 className="sub-title help-center mg-bt-32 ">
                                Look through our most common FAQ below. Can't find an answer? Reach out to us at any time!
                            </h5>
                        </div>
                        <div className="col-md-12">
                            <div className="flat-accordion2">
                                {
                                    data.map((item,index) => (
                                        <Accordion key={index} title={item.title} >
                                            <p>{item.text}</p>
                                        </Accordion>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default FAQ;
