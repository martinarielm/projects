export interface Card {
	cardNumber: string;
	cardName: string;
	expirationDate: string;
	cvc: string;
}

export const CreditCardActionTypes = {
	SET_CARD_NUMBER: "SET_CARD_NUMBER",
	SET_CARD_NAME: "SET_CARD_NAME",
	SET_EXPIRATION_DATE: "SET_EXPIRATION_DATE",
	SET_CVC: "SET_CVC",
} as const;

export type CreditCardActionType =
	(typeof CreditCardActionTypes)[keyof typeof CreditCardActionTypes];

export type CreditCardAction = {
	type: CreditCardActionType;
	payload: string;
};
