import React from 'react';
import type { Route } from '../+types/root';

export function meta({ }: Route.MetaArgs) {

    return [{
        title: "Register"
    }];
};

const Register = () => {
    return (
        <React.Fragment>
            <h1>Register</h1>
        </React.Fragment>
    );
};

export default Register;