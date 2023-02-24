import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import weatherSaga from "./weatherSaga";
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	reducer: rootReducer,
	middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(weatherSaga);
export default store;
