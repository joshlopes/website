import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import heroSliderData from '../assets/fake-data/data-slider-2';
import Create from '../components/layouts/home-2/Create';
import SliderStyle1 from '../components/slider/SliderStyle1';
import Contact from '../components/layouts/home-2/Contact';
import FAQ from "../components/layouts/home-2/FAQ";
import Sponsors from "../components/layouts/home-2/Sponsors";
import Communities from "../components/layouts/home-2/Communities";
import Nodes from "../components/layouts/home-2/Nodes";
import nodesData from '../assets/fake-data/nodes';

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
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
