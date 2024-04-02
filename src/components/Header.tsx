import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<h1>
				React Router Dom <span className="color-blueviolet">+6.4</span> + Ant
				Desing <span className="color-blueviolet">5.16</span>
			</h1>
			<nav className="flex-center">
				<ul>
					<li className="flex-center">
						<NavLink
							to={"/login"}
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							Login
						</NavLink>
						<NavLink
							to={"/"}
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							Home
						</NavLink>
						<NavLink
							to={"/users"}
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							Users
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
