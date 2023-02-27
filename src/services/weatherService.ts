import axios from "axios";

interface WeatherResponse {
	payload: any;
}

export async function fetchWeather(city: string): Promise<WeatherResponse> {
	return await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b5aad4fab443b8fc561cd84cbc232cc9`
	);
}
