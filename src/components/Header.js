import React from 'react';
import MyNavbar from './MyNavbar';
import Banner from './Banner';
import MyNavbar2 from './MyNavbar2';


export default function Header(props) {
    return (
        <>
            <MyNavbar/>
            <Banner/>
            <MyNavbar2/>
        </>
    )
}
