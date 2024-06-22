import React from 'react'
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import image5 from '../images/image5';
import image3 from '../images/image3';
import image4 from '../images/image4';
import image6 from '../images/image6';
import image1 from '../images/image1';
import image2 from '../images/image2';
import './CardComponent.css';

const CardComponent = () => {
    return (
        <Grid container spacing={3} style={{ backgroundColor: 'GrayText', overflow: 'hidden' }}>
            {[{ image: image5, title: 'Religious Tour', description: 'We have all-inclusive packages to religious places in Mangalore, Udupi, Dharmasthala, and Subramanya.' },
            { image: image3, title: 'Taxi and Cabs', description: 'Best-in-class cabs in Mangalore with respect to speed, convenience, and customer-friendliness.' },
            { image: image4, title: 'Outstation Taxi', description: 'Planning an outstation trip with friends or family? Give us a call, and we\'ll get the best cabs/taxi for you in no time.' },
            { image: image6, title: 'Sightseeing', description: 'The best in class sightseeing packages to experience travel like never before - only with Leeds Cabs.' },
            { image: image2, title: 'Airport Taxi', description: 'Travel in style to Mangalore Airport in Taxis that are punctual, clean and easy on your pocket.' },
            { image: image1, title: 'Tourist Bus', description: 'AC or Non-AC buses in varying capacities to local and outstation tourist places and for any other events.' }]
                .map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card className="card-root" sx={{ maxWidth: 350, height: '100%', margin: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '18px' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image={item.image}
                                    alt={item.title}
                                    style={{ borderRadius: '100%' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
        </Grid>
    )
}

export default CardComponent;