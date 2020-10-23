import { createStore, applyMiddleware } from "redux";
import { rootReducer, initialState } from "./reducers";
import apiMiddleware from "./apiMiddleware";
import loggingMiddleware from "./loggingMiddleware";
export const configureStore = () => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(loggingMiddleware, apiMiddleware)
    );
    return store;
};
export default configureStore;