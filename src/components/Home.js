import React, { useState } from 'react';
import { Carousel, Card, CardDeck, Container, Row, Col, Image, ProgressBar, Button } from 'react-bootstrap';
import '../App.css';

const Home = ({ images }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const margin = {
        margin: 15
      }
      const padding = {
        padding: 5,
        color: "white"
      }
    

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {images.map(image => {
                    return (
                        <Carousel.Item>
                            <img key={image.id}
                                className="d-block w-100"
                                src={image.url}
                                alt={image.title}
                            />
                            <Carousel.Caption>
                                <h3>{image.title}</h3>
                                <p>{image.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <div>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image className="mie" src="https://ahoniitty.github.io/public/img/mie.JPG" roundedCircle />
                        </Col>
                        <Col xs={6} md={8}>
                            <h2>AHONIITTY</h2>
                        <div clasName="about-me">
                            <h3>About me</h3>
                        </div>                        
                        <div>
                            <p>I enjoy good company, humour and these two are combined in my passion of DnD. I have been dungeon master for quite some time for friends, colleagues, and a couple of times for random people (homebrew + 5e). I do arts in my free time and the biggest inspiration in life are games. In future I want to be able to tell (fantasy) stories in games or comics.
                                <br />
                            My days are filled with things I’m passionate about such as work, studies, and hobbies. My goal for 2021 is to graduate, get a work and develop myself more.
                            </p>
                        </div>
                        </Col>
                    </Row>
                </Container>

            </div>
            {/* SKILLS */}
            <div>
                <Container>
                <Row>
            <Col style={margin} xs={7} md={9}>
            <h2>SKILL TREE</h2>
                <h4>Videoediting and Visuals</h4>
                <p>Photoshop</p>
                <ProgressBar>
                <ProgressBar striped variant="warning" now={80} key={1} />
                <ProgressBar striped variant="danger" now={20} key={2} />
                </ProgressBar>
                </Col>
                <Col style={margin} xs={5} md={7}>
                <p>Adobe CC</p>
                <ProgressBar striped variant="warning" now={100} />
                <h4>Programming</h4>
                <p>PHP</p>
                <ProgressBar striped variant="warning" now={70} />
                <p>C#</p>
                <ProgressBar striped variant="warning" now={10} />
                <p>React</p>
                <ProgressBar striped variant="warning" now={30} />
                </Col>
                </Row>
                </Container>
            </div>

            <CardDeck>
                <Card>
                <iframe src="https://ahoniitty.github.io/ravintola/lapintaika.html" width="575" height="365" title="Lapintaika" alt="Animation"></iframe>
                    {/* <Card.Img variant="top" src="https://prinsessastro.github.io/img/card2.jpg" /> */}
                    <Card.Body>
                        <Card.Title>Grid practice</Card.Title>
                        <Card.Text>
                            This is school work, where I practiced Grid-layout.
                            
      </Card.Text><Button variant="primary"><a style={padding} href="https://ahoniitty.github.io/ravintola/lapintaika.html">Visit My Grid Project</a></Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 2019</small>
                    </Card.Footer>
                </Card>
                <Card>
                <iframe src="https://ahoniitty.github.io/monhunrun/index.html" width="575" height="365" title="CSS" alt="Animation"></iframe>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                        <Card.Title>CSS animation (First Year)</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
        content.
                        </Card.Text><Button variant="primary"><a style={padding} href="https://ahoniitty.github.io/monhunrun/index.html">Visit My Animation</a></Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 2019</small>
                    </Card.Footer>
                </Card>
                <Card>
                <iframe src="https://prinsessastro.github.io/build/index.html" width="575" height="365" title="Wankko Site" alt="Wankko"></iframe>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                        <Card.Title>First React</Card.Title>
                        <Card.Text>
                            Fanshop (of my own) products.
                            
      </Card.Text><Button variant="primary"><a style={padding} href="https://prinsessastro.github.io/build/index.html">Visit My React Project</a></Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 2020</small>
                    </Card.Footer>
                </Card>
            </CardDeck>



        </div>


    );

}

export default Home;