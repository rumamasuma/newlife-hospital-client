import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import CallCenter from '../CallCenter/CallCenter';
import Header from '../Header/Header';
import Services from '../Services/Services';
import ChooseUs from '../ChooseUs/ChooseUs';
import Mission from '../Mission/Mission';

const Home = () => {
    return (
        <div>
         
           <Header></Header>
           <Banner></Banner>
           <CallCenter></CallCenter>
           <ChooseUs></ChooseUs>
           <Services></Services>
           <AboutUs></AboutUs>
        <Mission></Mission>
        </div>
    );
};

export default Home;