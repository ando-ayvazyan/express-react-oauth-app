import {ThunkAction} from "redux-thunk";
import {Action} from "redux";

export type IAction = ThunkAction<void, any, unknown, Action<string>>;