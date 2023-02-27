import React, { ReactElement } from "react";

type ButtonProps = {
	btnName: string;
	handleClick: (data: any) => any;
};

const ButtonHeader = ({ handleClick, btnName }: ButtonProps): ReactElement => {
	return (
		<div>
			<button onClick={handleClick}> {btnName} </button>
		</div>
	);
};

export default ButtonHeader;
