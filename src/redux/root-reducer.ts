import { combineReducers } from "redux";
import { weatherReducer } from "./searchWeather/weatherReducer";
import { favoriteReducer } from "./favoriteWeatherList/favoriteReducer";

const rootReducer = combineReducers({
	weatherReducer,
	favoriteReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
