import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from './reducers/index';
import { save } from 'redux-localstorage-simple';


const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;



const configStore = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(save({namespace: 'todo-list'}))
        ),
    )
);
const store = configStore({});

export default store;