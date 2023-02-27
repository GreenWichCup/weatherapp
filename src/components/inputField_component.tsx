import { ReactElement } from "react";

type InputProps = {
	placeholder: string;
	data: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
	placeholder,
	data,
	handleChange,
}: InputProps): ReactElement => {
	return (
		<input
			value={data}
			type="text"
			placeholder={placeholder}
			onChange={handleChange}
		/>
	);
};

export default InputField;
