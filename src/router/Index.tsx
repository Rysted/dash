import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import DetailsUser, { loaderDetailsUser } from "../pages/DetailsUser";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RouteError from "../pages/RouteError";
import Users, { LoaderUsers } from "../pages/Users";

export const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/",
		element: <Layout />,
		errorElement: <RouteError />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/users",
				element: <Users />,
				loader: LoaderUsers,
			},
			{
				path: "/user/:id",
				element: <DetailsUser />,
				loader: loaderDetailsUser,
			},
		],
	},
]);
