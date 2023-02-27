export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const EMPTY_FAVORITE = "EMPTY_FAVORITE";
export const GET_WEATHER_DATA = "GET_WEATHER_DATA";
export const SET_WEATHER_DATA = "SET_WEATHER_DATA";
export const SEARCH_WEATHER_DATA = "SEARCH_WEATHER_DATA";
export const GET_FAVORITE_DATA = "GET_FAVORITE_DATA";
export const SET_FAVORITE_DATA = "SET_FAVORITE_DATA";

export interface WeatherData {
	id: number;
	name: string;
	weather: string;
	temp: number;
	humidity: number;
	country: string;
	wind: number;
}
