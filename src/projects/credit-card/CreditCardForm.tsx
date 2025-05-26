import { Container, Grid, TextField } from "@mui/material";
import { CreditCardProvider } from "./context/CreditCardProvider";
import { useCreditCardContext } from "./context/CreditCardContext";
import {
	CreditCardActionTypes,
	type CreditCardActionType,
} from "./types/types";
import CreditCardRender from "./CreditCardRender";

function CreditCardFormContent() {
	const { state, dispatch } = useCreditCardContext();
	const { SET_CARD_NUMBER, SET_CARD_NAME, SET_EXPIRATION_DATE, SET_CVC } =
		CreditCardActionTypes;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		if (isValidActionType(name)) dispatch({ type: name, payload: value });
	};

	const isValidActionType = (name: string): name is CreditCardActionType => {
		return name in CreditCardActionTypes;
	};

	return (
		<Container>
			<Grid container spacing={2}>
				<Grid size={6}>
					<TextField
						name={SET_CARD_NUMBER}
						onChange={handleChange}
						value={state.cardNumber}
						label="Número de Tarjeta"
						variant="outlined"
						fullWidth
					/>
					<TextField
						name={SET_CARD_NAME}
						onChange={handleChange}
						value={state.cardName}
						label="Nombre del Titular"
						variant="outlined"
						fullWidth
					/>
					<TextField
						name={SET_EXPIRATION_DATE}
						onChange={handleChange}
						value={state.expirationDate}
						label="Fecha de Expiración"
						variant="outlined"
						fullWidth
					/>
					<TextField
						name={SET_CVC}
						onChange={handleChange}
						value={state.cvc}
						label="Código de Seguridad"
						variant="outlined"
						fullWidth
					/>
				</Grid>
				<Grid size={6}>
					<CreditCardRender />
				</Grid>
			</Grid>
		</Container>
	);
}

export default function CreditCardForm() {
	return (
		<CreditCardProvider>
			<CreditCardFormContent />
		</CreditCardProvider>
	);
}
