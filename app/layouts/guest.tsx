import React from 'react';
import { Outlet } from 'react-router';
import GuestNavbar from '~/components/GuestNavBar';

const GuestLayout = () => {
    return (
        <React.Fragment>
            <GuestNavbar />
            <Outlet />
        </React.Fragment>
    );
};

export default GuestLayout;