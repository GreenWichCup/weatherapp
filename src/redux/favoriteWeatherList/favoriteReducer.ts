import { WeatherData } from "./../actions_type";
import {
	ADD_TO_FAVORITE,
	REMOVE_FROM_FAVORITE,
	GET_FAVORITE_DATA,
	SET_FAVORITE_DATA,
} from "../actions_type";

export const favoriteReducer = (data: WeatherData[] = [], action: any) => {
	switch (action.type) {
		case GET_FAVORITE_DATA:
		case SET_FAVORITE_DATA:
			return [...data];
		case ADD_TO_FAVORITE:
			console.warn("Add to Cart condition:", action);
			return [action.data, ...data];
		case REMOVE_FROM_FAVORITE:
			console.warn("Remove from Cart condition:", action);
			console.log(data.length);
			//data.length = data.length ? data.length - 1 : [];
			const remainingItems = data.filter((item) => item.id !== action.data);
			return [...remainingItems];
		default:
			return data;
	}
};
