import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import heroSliderData from '../assets/static-data/data-slider';
import Create from '../components/layouts/Create';
import SliderStyle1 from '../components/slider/SliderStyle1';
import Contact from '../components/layouts/Contact';
import FAQ from "../components/layouts/FAQ";
import Sponsors from "../components/layouts/Sponsors";
import Communities from "../components/layouts/Communities";
import Nodes from "../components/layouts/Nodes";
import nodesData from '../assets/static-data/nodes';
import Team from "../components/layouts/Team";

const Home = () => {
    return (
        <div className='home-2'>
            <Header />
            <SliderStyle1 data={heroSliderData} />
            <Create />
            <Nodes data={nodesData} />
            <Communities />
            <Sponsors />
            <FAQ />
            <Team />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
