import React from 'react';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
        return (
                <div>
                        <Header />
                        <Banner />
                        <Foods />
                        <Footer />
                </div>
        );
};

export default Home;