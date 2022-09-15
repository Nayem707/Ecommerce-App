import { createStore } from "redux";
import rootReducers from "./reduser";

const store = createStore(rootReducers);

export default store;
