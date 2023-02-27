import { WeatherData } from "./../actions_type";
import {
	ADD_TO_FAVORITE,
	REMOVE_FROM_FAVORITE,
	GET_FAVORITE_DATA,
	SET_FAVORITE_DATA,
} from "../actions_type";

export const addToFavorite = (data: WeatherData) => {
	console.warn("action ADD_TO_FAVORITE called", data);
	//return statement MUST CONTAIN an object with : a "type" key which should by be synced with the reducer;
	return {
		type: ADD_TO_FAVORITE,
		data,
	};
};
export const removeFromFavorite = (data: WeatherData) => {
	console.warn("action REMOVE_FROM_FAVORITE called", data);
	//return statement MUST CONTAIN an object with : a "type" key which should by be synced with the reducer;
	return {
		type: REMOVE_FROM_FAVORITE,
		data,
	};
};

export const favoriteList = () => {
	return {
		type: SET_FAVORITE_DATA,
	};
};
export const getFavoriteSaved = (data: WeatherData[]) => {
	return {
		type: GET_FAVORITE_DATA,
		data,
	};
};
