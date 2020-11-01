import React, { useState } from 'react';
//import { Carousel, Card, CardDeck, Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';

import '../App.css';

const Imagegallery = ({ gallery}) => {
    
        return (
            <div>
        <Gallery gallery={gallery} />
    </div>
        );
    }

export default Imagegallery;