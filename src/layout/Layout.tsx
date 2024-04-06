import { ConfigProvider } from "antd";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }: { children?: React.ReactNode }) => {
	const navigation = useNavigation();

	return (
		<ConfigProvider
			theme={{
				token: {
					// Seed Token
					colorPrimary: "#6E06F2",
					controlOutline: "#C984FF",
					borderRadius: 8,

					// Alias Token
					colorBgContainer: "#FFFFFF",
				},
			}}
		>
			<Header />
			<main className={navigation.state === "loading" ? "loading" : ""}>
				<Outlet />
				{children}
			</main>
			<Footer />
		</ConfigProvider>
	);
};

export default Layout;
