import React, { useContext } from 'react';
import type { Route } from '../+types/root';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Detail Post" }
    ];
};

export async function loader({ params }: Route.LoaderArgs) {
    const { id } = params;
    return { id };
}

const DetailPost = ({ loaderData }: Route.ComponentProps) => {
    const { id: postId } = loaderData!;
    return (
        <React.Fragment>
            <h1>Detail Post  {postId}</h1>
        </React.Fragment>
    );
};

export default DetailPost;

