import { Outlet, Link } from "react-router-dom";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export default function Root() {
	return (
		<>
			<CssBaseline />
			<Container>
				<nav>
					<ul>
						<li>
							<Link to="/">Inicio</Link>
						</li>
						<li>
							<Link to="/credit-card">Formulario de Tarjeta</Link>
						</li>
					</ul>
				</nav>
				<Outlet />
			</Container>
		</>
	);
}
