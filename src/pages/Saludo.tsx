import { Link } from "react-router-dom";

const Saludo = () => {
	return (
		<>
			<h2>Hola, yo soy la ruta /password-recovery</h2>
			<br />
			<Link to="/login">Regresa al /login</Link>
		</>
	);
};

export default Saludo;
