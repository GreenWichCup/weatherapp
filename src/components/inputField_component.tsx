import { ReactElement } from "react";

type InputProps = {
	placeholder: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
	placeholder,
	handleChange,
}: InputProps): ReactElement => {
	return (
		<input type="text" placeholder={placeholder} onChange={handleChange} />
	);
};

export default InputField;
