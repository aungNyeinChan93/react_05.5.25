import React from 'react';
import type { Route } from '../+types/root';
import Banner from '~/components/Banner';

export function meta({ }: Route.MetaArgs) {

    return [{ title: 'About Page' }];
};

const About = () => {
    return (
        <React.Fragment>
            <Banner />
        </React.Fragment>
    );
};

export default About;