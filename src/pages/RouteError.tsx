import { Link, useRouteError } from "react-router-dom";
import Layout from "../layout/Layout";

interface RouteError {
	status?: number;
	statusText?: string;
	message?: string;
	error?: {
		message: string;
	};
}

const RouteError = () => {
	const res = useRouteError() as RouteError;

	const { status, statusText, message, error } = res;

	return (
		<Layout>
			<section>
				{status && <h1>{status}</h1>}
				<p>{statusText || message}</p>
				{error?.message && <p>{error.message}</p>}
				<Link to={"/"}>Regresar al inicio</Link>
			</section>
		</Layout>
	);
};

export default RouteError;
