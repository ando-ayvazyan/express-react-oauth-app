import { combineReducers } from 'redux';
import { reducerEntity } from '../entity/reducerEntity';

const reducerRoot = combineReducers({
	entity: reducerEntity,
});

export {
	reducerRoot,
};