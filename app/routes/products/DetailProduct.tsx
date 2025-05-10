import React from 'react';
import type { Route } from '../../+types/root';
import ProductCard from '~/components/ProductCard';
import { Link } from 'react-router';

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

const DetailProduct = ({ loaderData }: Route.ComponentProps) => {
    const { test, id: postId, name, data: product } = loaderData!;
    return (
        <React.Fragment>
            {/* <h1> {test} {name} {postId}</h1> */}
            <section className='grid grid-cols-3 gap-4 mt-10'>
                <div></div>
                <ProductCard product={product} />
            </section>
            <section className='flex justify-center items-center'>
                <Link to={'/products'} className='mt-3 '>Back</Link>
            </section>
        </React.Fragment>
    );
};

export default DetailProduct;