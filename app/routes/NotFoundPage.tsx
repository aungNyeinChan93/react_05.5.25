import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <React.Fragment>
            <section className='w-full h-screen flex justify-center items-center'>
                <div className='text-center p-3'>
                    <h1 className='text-red-500 text-4xl font-bold mb-8'>404 Not Found !</h1>
                    <Link className='px-4 py-2 bg-blue-600 rounded-2xl' to={'/'}>Go back home  </Link>
                </div>
            </section>
        </React.Fragment>
    );
};

export default NotFoundPage;