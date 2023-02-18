import { legacy_createStore as createStore } from "redux";
import { reducer } from "./Textdata/reducer";

export const store = createStore(reducer);