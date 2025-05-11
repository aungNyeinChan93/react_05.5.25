import React, { useContext } from 'react';
import type { Route } from '../+types/root';
import PostCard from '~/components/PostCard';
import { Link, Form, useFetcher } from 'react-router';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Detail Post" }
    ];
};

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const { id } = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return { data }
}

export async function clientAction({ params }: Route.ClientActionArgs) {
    const { id } = params;
    try {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        });
        return { success: true }
    } catch (error) {
        return { success: false }
    }
}

interface Post {
    id: number,
    userId: number,
    title: string,
    body: string
};


const DetailPost = ({ loaderData }: Route.ComponentProps) => {
    const { data: post }: { data: Post } = loaderData!;
    const fetcher = useFetcher();
    const isSuccess = fetcher.data?.success;

    return (
        <React.Fragment>
            {
                isSuccess ? (<section className='flex justify-center items-center w-full h-screen'>
                    <div className='text-center'>
                        <p className='text-red-600 text-3xl p-2'>Post was Deleted!</p>
                        <Link to={'/posts'}>Back</Link>
                    </div>
                </section>) : (<section>
                    <section className='mx-10 my-5'>
                        <div></div>
                        <PostCard post={post} />
                    </section>
                    <section className=' flex justify-start ms-10 mt-5  items-center'>
                        <fetcher.Form className='me-5' method='DELETE'>
                            <button type='submit'>Delete</button>
                        </fetcher.Form>
                        <Link to={'/posts'}>Back</Link>
                    </section>
                </section>)
            }

        </React.Fragment>
    );
};

export default DetailPost;

