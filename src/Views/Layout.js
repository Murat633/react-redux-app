import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Navi from '../components/navi/Navi';

class Layout extends Component {
    render() {
        return (
            <div>
                <Navi />
                <Outlet />
            </div>
        );
    }
}

export default Layout;
