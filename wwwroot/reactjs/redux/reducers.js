import * as UserReducer from './UserReducer'
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    Users: UserReducer.reducer
});

export const initialState = {
    Users: UserReducer.initialState
};

export default rootReducer;