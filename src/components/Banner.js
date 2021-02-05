import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BannerText from './BannerText';
import { useHistory } from 'react-router-dom';

export default function Banner(props) {

    let history = useHistory();

    function handleClick() {
        history.goBack();
    }

    return (
        <Container fluid className='banner-container '>
            <Link onClick={handleClick}>{`< Back`}</Link>
            <BannerText heading={'ID WEEK 2020'} date={'21-25 OCTOBER'} location={'PHILADELPHIA, PENNSYLVANIA, USA'}/>
        </Container>
    )
}
