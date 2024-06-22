import React from 'react'
import Navbar from '../Navbar/Navbar';
import image1 from '../images/image1';
import image4 from '../images/image4';
import image3 from '../images/image3';
import image2 from '../images/image2';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CardComponent from './CardComponen';
import FooterComponent from './FooterComponent';

const HomePage = () => {
    const carouselTexts = [
        "24/7 Services",
        "Airport Pick and Drop",
        "Best Package Deals",
        "Ambient Lighting Business"
    ];
    const [currentSlide, setCurrentSlide] = React.useState(0);


    const handleSlideChange = index => {
        setCurrentSlide(index);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', justifyContent: 'space-between', width: '100%', alignItems: 'center', backgroundColor: 'GrayText', overflowX: 'hidden' }}>
            <div style={{ width: '100%' }}>
                <Navbar />
            </div>
            <div style={{ marginTop: '10px', width: '100%', padding: 10, borderBottom: '1px solid black', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '30px', fontWeight: 'bold', width: '30%', color: 'white', padding: '10px' }}>
                    {carouselTexts[currentSlide]}
                </Typography>
                <Carousel autoPlay={true} showThumbs={false} interval={2000} infiniteLoop={true} showStatus={false} showArrows={false} onChange={handleSlideChange}>
                    <div>
                        <img src={image1} alt="Slide 1" style={{ width: '50%', height: '400px', borderRadius: '16px' }} />
                    </div>
                    <div>
                        <img src={image2} alt="Slide 2" style={{ width: '50%', height: '400px', borderRadius: '16px' }} />
                    </div>
                    <div>
                        <img src={image3} alt="Slide 3" style={{ width: '50%', height: '400px', borderRadius: '16px' }} />
                    </div>
                    <div>
                        <img src={image4} alt="Slide 4" style={{ width: '50%', height: '400px', borderRadius: '16px' }} />
                    </div>
                </Carousel>
            </div>
            <div style={{ marginTop: '10px', padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ padding: 20, display: 'flex', flexDirection: 'row' }}>
                    <CurrencyRupeeIcon />
                    <Typography >Best Price Deals</Typography>
                </div>
                <div style={{ padding: 20, display: 'flex', flexDirection: 'row' }}>
                    <CallIcon />
                    <Typography>Easy Phone Booking</Typography>
                </div>
                <div style={{ padding: 20, display: 'flex', flexDirection: 'row' }}>
                    <CalendarMonthIcon />
                    <Typography>One-Step</Typography>
                </div>
            </div>
            <CardComponent />
            <FooterComponent />
        </div>
    )
}

export default HomePage;