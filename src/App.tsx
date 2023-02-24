import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header_component";
import WeatherCard from "./components/weatherCard_component";

function App() {
	useEffect(() => {
		// fetch weatherList and  dispatch(weatherList());
	}, []);

	return (
		<div className="App">
			<Header />
			<WeatherCard />
		</div>
	);
}

export default App;
