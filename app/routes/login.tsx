import React from 'react';
import type { Route } from '../+types/root';

export function meta({ }: Route.MetaArgs) {

    return [{
        title: "Login"
    }];
};

const Login = () => {
    return (
        <React.Fragment>
            <h1>Login</h1>
        </React.Fragment>
    );
};

export default Login;