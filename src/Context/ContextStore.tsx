import { createContext, useState } from "react";

type StoreProviderProp = {
	children: React.ReactNode;
};

type ValueType = {
	menuOpen: boolean;
	setMenuOpen: (T: boolean) => void;
};

export const CurrentContext = createContext<ValueType>({
	menuOpen: false,
	setMenuOpen: () => {},
});
export const StoreProvider: React.FC<StoreProviderProp> = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const value: ValueType = {
		menuOpen,
		setMenuOpen,
	};

	return (
		<CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>
	);
};
