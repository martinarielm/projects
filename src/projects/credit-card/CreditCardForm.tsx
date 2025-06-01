import { Container, Grid, Stack, TextField } from "@mui/material";
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
		<Container maxWidth="md">
			<Grid container spacing={4}>
				<Grid size={5}>
					<Stack spacing={2}>
						<TextField
							label="Número de Tarjeta"
							name={SET_CARD_NUMBER}
							onChange={handleChange}
							value={state.cardNumber}
							variant="outlined"
							size="small"
							fullWidth
						/>
						<TextField
							label="Nombre del Titular"
							name={SET_CARD_NAME}
							onChange={handleChange}
							value={state.cardName}
							variant="outlined"
							size="small"
							fullWidth
						/>
						<TextField
							label="Fecha de Expiración"
							name={SET_EXPIRATION_DATE}
							onChange={handleChange}
							value={state.expirationDate}
							variant="outlined"
							size="small"
							fullWidth
						/>
						<TextField
							label="Código de Seguridad"
							name={SET_CVC}
							onChange={handleChange}
							value={state.cvc}
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Stack>
				</Grid>
				<Grid size={7}>
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
