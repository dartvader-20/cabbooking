import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';

const FooterComponent = () => {
    const text = `Provides Taxi Service is Mangalore's foremost travel agency
    specializing in short and long distance taxi service, Outstation
    travel packages, Religious tours, Bridal cars, Corporate tours
    and Airport Taxis.`;
    return (
        <div style={{ borderTop: '2px solid black', width: '100%', padding: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>
            <div style={{ padding: 10, display: 'flex', flexDirection: 'column' }}>
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '30px', fontWeight: 'bold', color: 'white', }}>Social Media</Typography>
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 'bold', }}><WhatsAppIcon /> WhatsApp</Typography>
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 'bold', }}><InstagramIcon /> Instagram</Typography>
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 'bold', }}><YouTubeIcon /> YouTube</Typography>
            </div>
            <div style={{ padding: 10 }}>
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '30px', fontWeight: 'bold', color: 'white', }}>About Kudla dha Cabs</Typography>
                <Typography width={200} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 'bold', }}>{text}</Typography>
            </div>
            <div style={{ padding: 10 }}>
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '30px', fontWeight: 'bold', color: 'white', }}>Contact Info</Typography>
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 'bold', }}><HomeIcon />   #123 manipal lake</Typography>
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 'bold', }}><EmailIcon />  chandan@123.com</Typography>
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 'bold', }}><PhoneIcon />  123456789</Typography>
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 'bold', }}><PublicIcon />  www.travels.com</Typography>
            </div>
            <div style={{ padding: 10 }}>
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontSize: '30px', fontWeight: 'bold', color: 'white', }}>Terms And Conditions</Typography>
                <Typography width={200} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 'bold', }}>The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                    Disputes, if any, are subject to Mangalore jurisdiction only.</Typography>
            </div>
        </div >
    )
}

export default FooterComponent;