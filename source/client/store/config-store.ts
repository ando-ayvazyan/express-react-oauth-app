import { compose, createStore, applyMiddleware } from 'redux';
import { reducerRoot } from '../reducers/root/reducerRoot';
import thunk from 'redux-thunk'

const storeRoot = createStore(
    reducerRoot,
    compose(
        applyMiddleware(thunk),
    ),
);

export {
    storeRoot,
};
