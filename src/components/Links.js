import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import '../App.css';

const Links = () => {
    return (
        <div >
            <Container>
                <h2>Links</h2>
                <p>Other projects that I have worked on:</p>
                <Card>
                <iframe src="https://wankko.fi/" width="auto" height="365" title="Wankko Site" alt="Wankko"></iframe>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                        <Card.Title>First TOP</Card.Title>
                        <Card.Text>
                            This project for school and Wankko took me around 100 hours. This was made with php.
                            
      </Card.Text><Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 2020</small>
                    </Card.Footer>
                </Card>
                <Card>
                <iframe src="https://ahoniitty.github.io/" width="auto" height="365" title="Wankko Site" alt="Wankko"></iframe>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                        <Card.Title>My Art "Brand" Site</Card.Title>
                        <Card.Text>
                            Made with Bootstrap.
                            
      </Card.Text><Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 2020</small>
                    </Card.Footer>
                </Card>
                <p>

                </p>
                <h2>My online business card</h2>
                <div>
                    <h4>Carrd</h4>
                    <iframe src="https://prinsessastro.carrd.co/" width="400" height="505" frameborder="1" scrolling="yes" allowtransparency="true"></iframe>
                </div>
                <h2>Social Medias</h2>

                <div>
                    <h4>Instagram</h4>
                    <iframe src="https://www.instagram.com/p/CFSJmEbjcMj/embed/captioned" width="400" height="505" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                </div>
            </Container>
            <div className="push"></div>
        </div>

    );
}

export default Links;