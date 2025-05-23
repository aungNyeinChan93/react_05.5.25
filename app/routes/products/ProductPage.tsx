import React from 'react';
import type { Route } from '../../+types/root';
import ProductCard from '~/components/ProductCard';
import { hydrateRoot } from 'react-dom/client';


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Products Page" }
    ];
};

export async function clientLoader({ }: Route.ClientLoaderArgs) {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data && { data };
}

export function HydrateFallback() {
    return (
        <div className='w-full h-screen flex justify-center items-center text-5xl text-red-700'>Loading...</div>
    );
}

interface product {
    id: number; title: string; price: number; description: string; image: string, category: string
}

const ProductPage = ({ loaderData }: Route.ComponentProps) => {
    const { data: products }: { data: product[] } = loaderData!;
    return (
        <React.Fragment>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-3 mx-6'>
                {
                    products.map((product: product) => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
            </div>
        </React.Fragment>
    );
};

export default ProductPage;