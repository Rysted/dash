import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Users, { LoaderUsers } from "../pages/Users";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Saludo from "../pages/Saludo";
import RouteError from "../pages/RouteError";
import DetailsUser, { loaderDetailsUser } from "../pages/DetailsUser";

export const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/password-recovery",
		element: <Saludo />,
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
