import React, { useState } from 'react'
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Avatar, Toolbar, MenuItem, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import logo from '../images/logo';

const NavBarStyle = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
    background: '#262433',
});

const StyledTypography = styled(Typography)({
    textDecoration: 'none',
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '20px',
    padding: '20px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    '&:hover': {
        color: 'black',
        background: 'white',
        borderRadius: '16px'
    },
});
const CustomAccordionDetails = styled(AccordionDetails)({
    position: 'absolute',
    top: '100px',
    zIndex: 2,
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '10px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
    overflowY: 'auto',
    maxHeight: '70vh',
    width: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
});


const Navbar = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };

    const handleLogout = () => {
        navigate('/')
        return;
    };
    const handleMouseEnter = (expandedSetter) => {
        expandedSetter(true);
    };

    const handleMouseLeave = (expandedSetter) => {
        expandedSetter(false);
    };
    return (
        <NavBarStyle>
            <div style={{ display: 'flex', flexDirection: 'row', }}>
                <Avatar alt="Profile" src={logo} style={{ width: 70, height: 70, padding: 10 }} />
                <Typography color='white' style={{
                    fontFamily: 'Poppins, sans-serif', fontSize: '40px',
                    padding: '20px', fontWeight: 'bold'
                }}>Kudla Dha Cabs</Typography>
            </div>
            <Toolbar>
                <StyledTypography onClick={() => { navigate("/") }}>
                    Home
                </StyledTypography>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    <Accordion expanded={expanded} style={{ background: 'transparent', border: 'none', boxShadow: 'none' }} onMouseEnter={() => handleMouseEnter(setExpanded)}
                        onMouseLeave={() => handleMouseLeave(setExpanded)}>
                        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                            <StyledTypography color='white' style={{
                                fontFamily: 'Poppins, sans-serif', fontSize: '20px',
                                fontWeight: 'bold'
                            }}>About Us</StyledTypography>
                        </AccordionSummary>
                        <CustomAccordionDetails>
                            <Typography color='GrayText' style={{
                                fontFamily: 'Poppins, sans-serif', fontSize: '12px',
                            }}>Kudla dha cabs provides variety of cab and tour bus services. where we have special packages for airport drops and pick ups. with our new line of tour buses of upto 33 person capacity we are able provide variety of pacakages to travel with your family friends with the best deal possible</Typography>
                        </CustomAccordionDetails>
                    </Accordion>
                    {expanded ? (
                        <ExpandLessIcon
                            style={{ cursor: 'pointer', color: 'white' }}
                            onClick={handleExpandClick}
                        />
                    ) : (
                        <ExpandMoreIcon
                            style={{ cursor: 'pointer', color: 'white' }}
                            onClick={handleExpandClick}
                        />
                    )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    <Accordion expanded={expanded1} style={{ background: 'transparent', border: 'none', boxShadow: 'none' }} onMouseEnter={() => handleMouseEnter(setExpanded1)}
                        onMouseLeave={() => handleMouseLeave(setExpanded1)}>
                        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                            <StyledTypography color='white' style={{
                                fontFamily: 'Poppins, sans-serif', fontSize: '20px',
                                fontWeight: 'bold'
                            }}>Packages</StyledTypography>
                        </AccordionSummary>
                        <CustomAccordionDetails>
                            <MenuItem onClick={() => navigate("/profile")}>General</MenuItem>
                            <MenuItem onClick={handleLogout}>Premium</MenuItem>
                        </CustomAccordionDetails>
                    </Accordion>
                    {expanded1 ? (
                        <ExpandLessIcon
                            style={{ cursor: 'pointer', color: 'white' }}
                            onClick={handleExpandClick1}
                        />
                    ) : (
                        <ExpandMoreIcon
                            style={{ cursor: 'pointer', color: 'white' }}
                            onClick={handleExpandClick1}
                        />
                    )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    <Accordion expanded={expanded2} style={{ background: 'transparent', border: 'none', boxShadow: 'none' }} onMouseEnter={() => handleMouseEnter(setExpanded2)}
                        onMouseLeave={() => handleMouseLeave(setExpanded2)}>
                        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                            <StyledTypography color='white' style={{
                                fontFamily: 'Poppins, sans-serif', fontSize: '20px',
                                fontWeight: 'bold'
                            }}>Services</StyledTypography>
                        </AccordionSummary>
                        <CustomAccordionDetails>
                            <MenuItem onClick={() => navigate("/profile")}>Cabs</MenuItem>
                            <MenuItem onClick={handleLogout}>Bus</MenuItem>
                        </CustomAccordionDetails>
                    </Accordion>
                    {expanded2 ? (
                        <ExpandLessIcon
                            style={{ cursor: 'pointer', color: 'white' }}
                            onClick={handleExpandClick2}
                        />
                    ) : (
                        <ExpandMoreIcon
                            style={{ cursor: 'pointer', color: 'white' }}
                            onClick={handleExpandClick2}
                        />
                    )}
                </div>
                <StyledTypography >
                    Contact
                </StyledTypography>
            </Toolbar>
        </NavBarStyle>
    )
}

export default Navbar;