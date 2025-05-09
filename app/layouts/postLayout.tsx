import React from 'react';
import { Outlet } from 'react-router';

const PostLayout = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};

export default PostLayout;