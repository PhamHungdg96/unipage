import * as types from "./types";

export const initialState = {
    Users: [{
        Name: "hung",
        Age:12
    }]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_LIST:
            return {
                ...state,
                Users: action.payload,
            };
        default:
            return state;
    }
};
