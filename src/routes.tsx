import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./pages/Home";
import CreditCardForm from "./projects/credit-card/CreditCardForm";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "credit-card",
				element: <CreditCardForm />,
			},
		],
	},
]);
