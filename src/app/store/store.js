import keep from "./../reducers/reducers";
import { createStore } from "redux";

export default function configureStore(initialState) {
	return createStore(keep, initialState);
}