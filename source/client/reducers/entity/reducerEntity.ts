import { combineReducers } from "redux";
import { userReducer } from "client/reducers/entity/userReducer";
import { repoReducer } from "client/reducers/entity/repoReducer";
import { commitReducer } from "./commitReducer";

const reducerEntity = combineReducers({
	user: userReducer,
	repo: repoReducer,
	commit: commitReducer,
});

export {
	reducerEntity
};