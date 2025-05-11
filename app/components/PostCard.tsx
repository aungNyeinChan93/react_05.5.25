import React from 'react';
import { Link } from 'react-router';

interface Post {
    id: number,
    userId: number,
    title: string,
    body: string
};

const PostCard = ({ post: { id, userId, title, body } }: { post: Post }) => {
    return (
        <React.Fragment>
            <article className="rounded-[10px] border border-gray-200 bg-white px-4 pt-12 pb-4">
                <p className="block text-xs text-gray-500"> {title} </p>

                <Link to={`/posts/${id}`}>
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        {body}
                    </h3>
                </Link>

                {/* <div className="mt-4 flex flex-wrap gap-1">
                    <span
                        className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600"
                    >
                        Snippet
                    </span>

                    <span
                        className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600"
                    >
                        JavaScript
                    </span>
                </div> */}
            </article>
        </React.Fragment>
    );
};

export default PostCard;