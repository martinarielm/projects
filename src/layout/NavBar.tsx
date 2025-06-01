import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function ResponsiveAppBar() {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						<Link to="/" style={{ textDecoration: "none" }}>
							<Button
								sx={{
									my: 2,
									color: "white",
									display: "block",
								}}
							>
								Projects
							</Button>
						</Link>

						<Link to="/credit-card" style={{ textDecoration: "none" }}>
							<Button sx={{ my: 2, color: "white", display: "block" }}>
								Formulario de Tarjeta
							</Button>
						</Link>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default ResponsiveAppBar;
