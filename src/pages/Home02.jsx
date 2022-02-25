import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import heroSliderData from '../assets/fake-data/data-slider-2';
import Create from '../components/layouts/home-2/Create';
import SliderStyle1 from '../components/slider/SliderStyle1';
import Contact from '../components/layouts/home-2/Contact';
import FAQ from '../components/layouts/home-2/FAQ';
import Team from '../components/layouts/home-2/Team';


const Home02 = () => {
    return (
        <div className='home-2'>
            <Header />
            <SliderStyle1 data={heroSliderData} />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home02;
