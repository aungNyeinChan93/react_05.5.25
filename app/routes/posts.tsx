import React from 'react';

import type { Route } from '../+types/root';
import PostCard from '~/components/PostCard';
import Loading from '~/components/Loading';

export function meta({ }: Route.MetaArgs) {

    return [
        { title: "Posts" }
    ];
};

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    return { data }
}

export function HydrateFallback() {
    return (
        <section className='flex justify-center items-center w-full h-screen'>
            <Loading />
        </section>
    );
}

interface Post {
    id: number,
    userId: number,
    title: string,
    body: string
}

const Posts = ({ loaderData }: Route.ComponentProps) => {
    const { data: posts }: { data: Post[] } = loaderData!;
    console.log(posts);

    return (
        <React.Fragment>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 my-2'>
                {
                    posts.map(post => {
                        return <PostCard post={post} />
                    })
                }
            </div>
        </React.Fragment>
    );
};

export default Posts;