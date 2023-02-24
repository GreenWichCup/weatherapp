import React, { ChangeEventHandler, useState } from "react";
import { useDispatch } from "react-redux";

import ButtonHeader from "./button_header";
import InputField from "./inputField_component";
import "../App.css";
import { searchWeatherData } from "../redux/searchWeather/weatherActions";

const Header = () => {
	const dispatch = useDispatch();
	const [query, setQuery] = useState("");
	const btnClick = async (e: MouseEvent) => {
		e.preventDefault();
		dispatch(searchWeatherData(query));
	};
	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target as unknown as { value: string };
		setQuery(value);
	};

	return (
		<div className="header">
			<div className="search-box">
				<InputField
					placeholder="Search example: City, Country"
					handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleTextChange(e)
					}
				/>
			</div>
			<div className="btn-box">
				<ButtonHeader btnName="weather" handleClick={btnClick} />
			</div>
		</div>
	);
};

export default Header;
