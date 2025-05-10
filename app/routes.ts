import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [

    route('/', './layouts/testLayout.tsx', [
        index("./routes/home.tsx"),
        route("about", "./routes/about.tsx"),
        route('test', './routes/test.tsx'),
        route('dashboard', './routes/dashboard.tsx'),

        // posts
        route('/posts', './layouts/postLayout.tsx', [
            index('./routes/posts.tsx'),
            route(":id", "./routes/detailPost.tsx"),
        ]),

        // products
        ...prefix('products', [
            index('./routes/products/ProductPage.tsx'),
            route('/:id', './routes/products/DetailProduct.tsx')
        ])
    ]),

    layout('./layouts/guest.tsx', [
        route('/login', "./routes/login.tsx"),
        route('/register', "./routes/register.tsx"),
    ]),

    route('*', './routes/NotFoundPage.tsx')


] satisfies RouteConfig;
