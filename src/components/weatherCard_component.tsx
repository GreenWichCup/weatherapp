import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/root-reducer";
import "../App.css";
import { WeatherData } from "../redux/actions_type";
import {
	addToFavorite,
	favoriteList,
} from "../redux/favoriteWeatherList/favoriteActions";
import FavoritesWeatherList from "./favorites_list.component";
import { Switch } from "@mui/material";

const WeatherCard = () => {
	let data: WeatherData[] = useSelector(
		(state: RootState) => state.weatherReducer
	);
	let list: WeatherData[] = useSelector(
		(state: RootState) => state.favoriteReducer
	);
	const [photo, setPhoto] = useState<string>("");
	const [favoriteList, setFavoriteList] = useState<WeatherData[]>([]);

	const [isToggled, setIsToggled] = useState<boolean>(false);
	const fahrenheit: number = Math.floor(data[0].temp * 1.8 - 459.67);
	const celsius: number = Math.floor(data[0].temp - 273.15);

	const addToFavorite = async () => {
		if (!favoriteList.includes(data[0])) {
			setFavoriteList([...favoriteList, data[0]]);
		}
	};

	const removeFavorite = (item: any) => {
		console.log("item id click in Application:", item);
		const newList = favoriteList.filter((fav) => fav.id !== item.id);
		console.log("filtered function :", newList);
		setFavoriteList([...newList]);
	};
	// TODO : refactor code => transfer function somewhe `reElse
	const weatherImg = useCallback(() => {
		let value;
		switch (data[0].weather.toLowerCase()) {
			case "rain":
			case "thunderstorm":
			case "drizzle":
				value = require("../assets/rainy.png");
				break;
			case "clouds":
			case "smoke":
			case "fog":
			case "haze":
			case "dust":
			case "sand":
			case "mist":
				value = require("../assets/cloud.png");
				break;
			case "clear":
				value = require("../assets/sunny.png");
				break;
			case "snow":
				value = require("../assets/snowflake.png");
				break;
			default:
				break;
		}
		setPhoto(value);
	}, [data]);

	useEffect(() => {
		if (data) {
			weatherImg();
		} else {
			console.log("noData");
		}
	}, [data, weatherImg]);

	const handleToggle = () => {
		setIsToggled(!isToggled);
	};
	//Adding favoriteList as dependecy will trigger loop component rendering
	useEffect(() => {
		let storedFavorites: string | null =
			localStorage.getItem("favoritesWeather");

		if (storedFavorites) {
			setFavoriteList(JSON.parse(storedFavorites));
			console.log("storedFavorites :", JSON.parse(storedFavorites));
		}
	}, []);
	useEffect(() => {
		localStorage.setItem("favoritesWeather", JSON.stringify(favoriteList));
		console.log("favoriteList updated, ", favoriteList);
	}, [favoriteList]);

	return data[0].id !== 0 ? (
		<div className="product-item">
			<span>Celcius</span>
			<Switch
				checked={isToggled}
				className="swicth-btn"
				onClick={handleToggle}
			/>
			<span>Farenheit</span>
			<div className="product-container">
				{data[0].name}, {data[0].country}
			</div>
			<img src={photo} height="100px" width="100px" alt="" />
			<div>temp: {!isToggled ? celsius : fahrenheit} </div>
			<div>humidity: {data[0].humidity}% </div>
			<div>wind: {data[0].wind} miles/h </div>

			<div>
				<button onClick={addToFavorite}>Add to favourites</button>
			</div>
			<FavoritesWeatherList data={favoriteList} removeFavorite={null} />
		</div>
	) : (
		<>
			<FavoritesWeatherList
				data={favoriteList}
				removeFavorite={() => {
					console.warn("useSelector(localStorage) value: ", list);
				}}
			/>
			<div className="product-item">NO WEATHER SEARCHED</div>
		</>
	);
};

export default WeatherCard;

/* Component card data Parent : 
=> current weather w/ add button
=> favorite list from local storage
*/

/* Component favorite Child :
=> item click 

*/
