import React from 'react';
import type { Route } from '../+types/root';

export function meta({ }: Route.MetaArgs) {

    return [{
        title: 'Dashboard'
    }];
};

const Dashboard = () => {
    return (
        <React.Fragment>
            <h1>Dashboard</h1>
        </React.Fragment>
    );
};

export default Dashboard;