import { useCreditCardContext } from "./context/CreditCardContext";
import { Paper, Typography } from "@mui/material";

export default function CreditCardRender() {
	const { state } = useCreditCardContext();

	return (
		<Paper>
			Tarjeta
			<Typography>{state.cardNumber}</Typography>
			<Typography>{state.cardName}</Typography>
			<Typography>{state.expirationDate}</Typography>
			<Typography>{state.cvc}</Typography>
		</Paper>
	);
}
