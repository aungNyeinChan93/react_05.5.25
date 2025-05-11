import React from 'react';
import type { Route } from '../../+types/root';
import ProductCard from '~/components/ProductCard';
import { Link, Form, useFetcher } from 'react-router';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Detail Product" }
    ];
};


export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const { id } = params;
    const name = 'Detail Product'
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();

    return { id, name, test: 'cl', data };
}

export async function clientAction({ params }: Route.ClientActionArgs) {
    const { id } = params;
    try {
        await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'DELETE'
        });
        return { success: true }
    } catch (error) {
        return { success: false }
    }
}

const DetailProduct = ({ loaderData }: Route.ComponentProps) => {
    const { test, id: postId, name, data: product } = loaderData!;
    const fetcher = useFetcher();
    const isSuccess = fetcher.data?.success;
    return (
        <React.Fragment>
            {isSuccess
                ? (
                    <div className='w-full h-screen flex justify-center items-center '>
                        <div>
                            <p className='text-red-600 text-4xl '>Product was deleted !</p>
                            <section className='flex justify-evenly items-center mx-[110px]'>
                                <Link to={'/products'} className='mt-3 '>Back</Link>
                            </section>
                        </div>
                    </div>)
                : (
                    <div>
                        <section className='grid grid-cols-3 gap-4 mt-10'>
                            <div></div>
                            <ProductCard product={product} />
                        </section>
                        <section className='flex justify-evenly items-center mx-[110px]'>
                            <fetcher.Form className='mt-3' method='DELETE'>
                                <button type='submit'>Delete</button>
                            </fetcher.Form>
                            <Link to={'/products'} className='mt-3 '>Back</Link>
                        </section>
                    </div>
                )}
        </React.Fragment>
    );
};

export default DetailProduct;