import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [

    route('/', './layouts/testLayout.tsx', [
        index("./routes/home.tsx"),
        route("/about", "./routes/about.tsx"),
        route('test', './routes/test.tsx'),
    ])

] satisfies RouteConfig;
