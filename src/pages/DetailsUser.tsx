import { useLoaderData } from "react-router-dom";
import type { Params, User } from "../types";

const DetailsUser = () => {
	const { user } = useLoaderData() as { user: User | string };

	if (typeof user === "string") {
		return <h2>No se encontró el usuario</h2>;
	}

	const { id, name, currency, country } = user;

	return (
		<>
			<h2>Detalles de: {name}</h2>
			<ul>
				<li>
					ID: <span className="color-blueviolet">{id}</span>
				</li>
				<li>
					currency: <span className="color-blueviolet">{currency}</span>
				</li>
				<li>
					country: <span className="color-blueviolet">{country}</span>
				</li>
			</ul>
		</>
	);
};

export default DetailsUser;

export const loaderDetailsUser = async ({ params }: { params: Params }) => {
	const { id } = params;

	const res = await fetch(`${import.meta.env.VITE_API}/${id}`);

	const user = await res.json();

	return { user };
};
