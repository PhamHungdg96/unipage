import * as types from "./types";

export const fetchUserList = () => ({
    type: types.FETCH_USER_LIST,
    payload: [],
    meta: {
        type: "api",
        url:  "home/user"
    }
});