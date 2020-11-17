import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HouseRent from '../HouseRent/HouseRent';
import Service from '../Service/Service';
import './Home.scss';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="main-content">
                <HouseRent></HouseRent>
                <Service></Service>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;