import Swal from "sweetalert2";

import { firebase } from '../firebase/firebase-config';
import { types } from '../types/types';


export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {
        try {
            const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
            const { uid, displayName } = user
            dispatch(login(uid, displayName))
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
            console.log(error);
        }
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}