import { useReducer, type ReactNode } from "react";
import {
	CreditCardActionTypes,
	type Card,
	type CreditCardAction,
} from "../types/types";
import { CreditCardContext } from "./CreditCardContext";

const initialState: Card = {
	cardNumber: "",
	cardName: "",
	expirationDate: "",
	cvc: "",
};

function creditCardReducer(state: Card, action: CreditCardAction) {
	const { SET_CARD_NUMBER, SET_CARD_NAME, SET_EXPIRATION_DATE, SET_CVC } =
		CreditCardActionTypes;

	switch (action.type) {
		case SET_CARD_NUMBER:
			return { ...state, cardNumber: action.payload };
		case SET_CARD_NAME:
			return { ...state, cardName: action.payload };
		case SET_EXPIRATION_DATE:
			return { ...state, expirationDate: action.payload };
		case SET_CVC:
			return { ...state, cvc: action.payload };
		default:
			return state;
	}
}

export const CreditCardProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(creditCardReducer, initialState);

	return (
		<CreditCardContext.Provider value={{ state, dispatch }}>
			{children}
		</CreditCardContext.Provider>
	);
};
