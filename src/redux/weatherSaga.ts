import { put, takeEvery } from "redux-saga/effects";
import { WeatherData } from "./actions_type";
import {
	SET_FAVORITE_DATA,
	GET_FAVORITE_DATA,
	SEARCH_WEATHER_DATA,
	SET_WEATHER_DATA,
} from "./actions_type";

function* getFavorites() {
	let data: string | null = yield localStorage.getItem("favoritesWeather");
	if (data) {
		const favorites: WeatherData[] = yield JSON.parse(data);
		yield put({ type: SET_FAVORITE_DATA, favorites });
		console.warn(" favorite called in saga", favorites);
	}
}

function* searchWeather(data: any): any {
	try {
		let result = yield fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${data.query}&appid=b5aad4fab443b8fc561cd84cbc232cc9`
		);
		result = yield result.json();
		const formattedResult = yield {
			id: result.id,
			name: result.name,
			weather: result.weather[0].main,
			temp: result.main.temp,
			country: result.sys.country,
			humidity: result.main.humidity,
			wind: result.wind.speed,
		};
		console.warn("action search weather called", formattedResult);
		yield put({ type: SET_WEATHER_DATA, data: formattedResult });
	} catch (error) {
		console.log("error city ");
		const noData = {
			id: "No data",
			name: "No data",
			weather: "No data",
			temp: "No data",
			country: "No data",
			humidity: "No data",
			wind: "No data",
		};
		yield put({ type: SET_WEATHER_DATA, data: noData });
	}
}

function* weatherSaga() {
	yield takeEvery(SEARCH_WEATHER_DATA, searchWeather);
	yield takeEvery(SET_FAVORITE_DATA, getFavorites);
}
export default weatherSaga;
