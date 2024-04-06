import { Outlet, useNavigate } from "react-router-dom";

interface ProtectedRoute {
	canActivate: string;
	redirectPath: string;
}

const ProtectedRoute = ({
	canActivate,
	redirectPath = "/login",
}: ProtectedRoute) => {
	const navigate = useNavigate();

	if (!canActivate) {
		navigate(redirectPath);
	}

	return <Outlet />;
};

export default ProtectedRoute;
