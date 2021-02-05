import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class MyNavbar2 extends Component {
    render() {
        return (
            <div className='d-flex justify-content-start navbar2-container '>
                <h6 className='d-flex align-items-center' >
                    <NavLink activeClassName='is-active' to='/ConferenceOverview'>
                        Conference Overview
                    </NavLink>
                </h6>
                <h6 className='d-flex align-items-center' >
                    <NavLink activeClassName='is-active' to='/Registration'>
                        Registration
                    </NavLink>
                </h6>
                <h6 className='d-flex align-items-center' >
                    <NavLink activeClassName='is-active' to='/TravelInformation' >
                        Travel Information
                    </NavLink>
                </h6>
            </div>
        )
    }
}
