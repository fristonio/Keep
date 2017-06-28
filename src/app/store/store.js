import keep from "./../reducers/reducers";
import { createStore } from "redux";

export default function configureStore() {
	return createStore(keep);
}