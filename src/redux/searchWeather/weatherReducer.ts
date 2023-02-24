import { SET_WEATHER_DATA } from "../actions_type";
import { WeatherData } from "../actions_type";
const initialState: WeatherData[] = [
	{
		id: 0,
		name: "",
		weather: "",
		temp: 0,
		humidity: 0,
		country: "",
		wind: 0,
	},
];

export function weatherReducer(data = initialState, action: any) {
	switch (action.type) {
		case SET_WEATHER_DATA:
			console.log("set weather data calle in reducer", action.data);
			return [{ ...action.data }];

		default:
			return data;
	}
}
