import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import type { User } from "../types";

const Home = () => {
	const { users } = useLoaderData() as { users: User[] };

	return (
		<>
			<section>
				<h2>user name</h2>

				{users ? (
					<ul className="column-center">
						{users.map((user: User) => {
							return (
								<li key={user.name}>
									<Link to={`/user/${user.id}`} className="color-blue">
										{user.id} - {user.name}
									</Link>
								</li>
							);
						})}
					</ul>
				) : (
					<p>There are no users</p>
				)}
			</section>
		</>
	);
};

export default Home;

export const LoaderUsers = async () => {
	const res = await fetch(`${import.meta.env.VITE_API}`);

	if (!res.ok)
		throw {
			status: res.status,
			statusText: "No encontrado",
		};

	const users = await res.json();

	return { users };
};
