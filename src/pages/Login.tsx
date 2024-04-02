import {
	Typography,
	Form,
	Button,
	Checkbox,
	type FormProps,
	Input,
	Space,
	ConfigProvider,
} from "antd";
import SvgIcon from "../icons/SvgIcon";
import { Link } from "react-router-dom";

const { Title } = Typography;

type FieldType = {
	email?: string;
	password?: string;
	remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
	console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
	console.log("Failed:", errorInfo);
};

const Login = () => {
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
			<Space
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: "40px",
				}}
			>
				<header>
					<SvgIcon svgName="smart_trading-color" />
				</header>

				<main>
					<Space
						style={{
							width: "max-content",
							backgroundColor: "#fff",
							borderRadius: "24px",
							padding: "40px 60px",
							display: "flex",
							flexDirection: "column",
							gap: "20px",
						}}
					>
						<Title style={{ margin: "0px" }}>Inicia sesión</Title>
						<Form
							style={{ width: "400px" }}
							name="basic"
							layout="vertical"
							initialValues={{ remember: true }}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete="off"
						>
							<Form.Item<FieldType>
								label="Correo electrónico"
								name="email"
								rules={[
									{ required: true, message: "Please input your email!" },
								]}
							>
								<Input
									size="large"
									placeholder="Introduzca su correo electrónico"
									prefix={<SvgIcon svgName="mail" />}
								/>
							</Form.Item>

							<Form.Item<FieldType>
								label="Contraseña"
								name="password"
								rules={[
									{ required: true, message: "Please input your email!" },
								]}
							>
								<Input.Password
									size="large"
									placeholder="Introduzca su contraseña"
									prefix={<SvgIcon svgName="lock" />}
								/>
							</Form.Item>

							<Space
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									paddingBottom: "24px",
								}}
							>
								<Form.Item<FieldType>
									name="remember"
									valuePropName="checked"
									style={{ marginBottom: "0px" }}
								>
									<Checkbox>Recuérdame</Checkbox>
								</Form.Item>

								<Link to={"/password-recovery"}>¿Olvidaste tu contraseña?</Link>
							</Space>

							<Button
								type="primary"
								htmlType="submit"
								size="large"
								style={{ width: "100%" }}
							>
								Submit
							</Button>
						</Form>
					</Space>
				</main>
			</Space>
		</ConfigProvider>
	);
};

export default Login;
