import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header_component";
import WeatherCard from "./components/weatherCard_component";
import PalindromChecker from "./components/palindrom_checker";

function App() {
	useEffect(() => {
		// fetch weatherList and  dispatch(weatherList());
	}, []);

	return (
		<div className="App">
			<PalindromChecker />
			<Header />
			<WeatherCard />
		</div>
	);
}

export default App;
