import {combineReducers} from "redux";
import {userReducer} from "client/reducers/entity/userReducer";
import {repoReducer} from "client/reducers/entity/repoReducer";
import {viewerReducer} from "client/reducers/entity/viewerReducer";

const reducerEntity = combineReducers({
	viewer: viewerReducer,
	user: userReducer,
	repo: repoReducer,
});

export {
	reducerEntity
};