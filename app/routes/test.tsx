import React from 'react';
import type { Route } from '../+types/root';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'Test Page' }
    ];
};

const Test = () => {
    return (
        <React.Fragment>
            <h1>Test page</h1>
        </React.Fragment>
    );
};

export default Test;