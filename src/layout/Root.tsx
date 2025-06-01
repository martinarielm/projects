import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { SpeedInsights } from "@vercel/speed-insights/react";
import NavBar from "./NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Root() {
	return (
		<>
			<CssBaseline />
			<NavBar />
			<Container sx={{ pt: 4 }} maxWidth="lg">
				<Outlet />
				<SpeedInsights />
			</Container>
		</>
	);
}
