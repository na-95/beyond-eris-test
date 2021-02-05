import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import hotel1 from '../images/hotel1.jpeg';
import hotel2 from '../images/hotel2.jpeg';
import hotel3 from '../images/hotel3.jpeg';

export default function TravelInformation() {
    return (
        <Container className='my-4 page'>
            <h4 >
                Venue: Pennsylvania Convention Center
            </h4>
            <p className="ml-4">Address: Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            <Carousel className="my-4">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hotel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hotel2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hotel3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            <h4 >
                While you are in Pennsylvania:
            </h4>
            <p className="ml-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="ml-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </Container>
    )
}
