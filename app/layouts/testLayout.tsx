import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '~/components/Navbar';

const TestLayout = () => {
    return (
        <React.Fragment>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </React.Fragment>
    );
};

export default TestLayout;