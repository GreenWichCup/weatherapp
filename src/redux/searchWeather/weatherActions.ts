import { GET_WEATHER_DATA, SEARCH_WEATHER_DATA } from "../actions_type";

export const weatherData = () => {
	return {
		type: GET_WEATHER_DATA,
	};
};

export const searchWeatherData = (query: string) => {
	return {
		type: SEARCH_WEATHER_DATA,
		query,
	};
};
