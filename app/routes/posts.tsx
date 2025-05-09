import React from 'react';

import type { Route } from '../+types/root';

export function meta({ }: Route.MetaArgs) {

    return [
        { title: "Posts" }
    ];
};

const Posts = () => {
    return (
        <React.Fragment>
            <h1>Posts Page</h1>
        </React.Fragment>
    );
};

export default Posts;