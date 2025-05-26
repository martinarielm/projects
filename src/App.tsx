import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreditCardForm from "./projects/credit-card/CreditCardForm";

function App() {
	return (
		<div>
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

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/credit-card" element={<CreditCardForm />} />
			</Routes>
		</div>
	);
}

export default App;
