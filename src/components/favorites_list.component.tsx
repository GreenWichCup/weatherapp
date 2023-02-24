import React, { useEffect, useState } from "react";
import { WeatherData } from "../redux/actions_type";
import { searchWeatherData } from "../redux/searchWeather/weatherActions";
import { useDispatch } from "react-redux";
import {
	favoriteList,
	getFavoriteSaved,
} from "../redux/favoriteWeatherList/favoriteActions";

type Props = {
	data: WeatherData[];
	removeFavorite: any;
};

const FavoritesWeatherList = ({ data, removeFavorite }: Props) => {
	const dispatch = useDispatch();
	const checkFavoriteWeather = (query: string) => {
		dispatch(searchWeatherData(query));
	};

	return data.length ? (
		<section>
			<div className="product-favorite">
				{data.map((item) => {
					return (
						<div key={item.id} className="product-item">
							<div className="product-container">
								{item.name}, {item.country}
							</div>
							<button
								onClick={() => {
									checkFavoriteWeather(item.name);
								}}
							>
								Add to Cart
							</button>
							<button onClick={removeFavorite}>Remove to Cart</button>
						</div>
					);
				})}
			</div>
		</section>
	) : (
		<section>
			<div className="product-favorite">No Favorites saved</div>
		</section>
	);
};

export default FavoritesWeatherList;
