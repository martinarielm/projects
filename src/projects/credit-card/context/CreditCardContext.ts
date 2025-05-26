import { createContext, useContext } from "react";
import type { Card, CreditCardAction } from "../types/types";

export type CreditCardContextType = {
	state: Card;
	dispatch: React.Dispatch<CreditCardAction>;
};

export const CreditCardContext = createContext<CreditCardContextType | null>(
	null,
);

export const useCreditCardContext = () => {
	const context = useContext(CreditCardContext);
	if (!context) {
		throw new Error(
			"useCreditCardContext debe usarse dentro de <CreditCardProvider>",
		);
	}
	return context;
};
