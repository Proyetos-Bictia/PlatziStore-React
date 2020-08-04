import { types } from "../types/types";

/* 
    user : {
        uid: '',
        name: '',
    }
*/


export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                user: {
                    uid: action.payload.uid,
                    name: action.payload.displayName,
                }
            }
        default:
            return state;
    }
}