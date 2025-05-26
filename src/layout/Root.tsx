import { Outlet, Link } from "react-router-dom";
import { Container } from "@mui/material";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
				<SpeedInsights />
			</Container>
		</>
	);
}
