import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { Layout } from "./root";

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
        ])
    ]),

    layout('./layouts/guest.tsx', [
        route('/login', "./routes/login.tsx"),
        route('/register', "./routes/register.tsx"),
    ]),


] satisfies RouteConfig;
