import {user} from "../types";
import {user as uAPI} from "../../apis";



export const checkUserName = (name) => {
    return async (dispatch) => {
        let checking = await uAPI.checkUserName(name);

        if (checking.status != 200)
            return dispatch({
                payload: checking.data.error,
                type: user.SET_ERROR
            })

        let adduser = await uAPI.addUser({name});

        if (adduser.status == 200)
            dispatch({
                payload: adduser.data,
                type: user.SET_USER
            });
    }
}


export const getUsers = () => {
    return async (dispatch) => {
        let users = await uAPI.getUsers();

        if (user.status == 200 && users.data.length)
            dispatch({
                payload: users.data,
                type: user.GET_USERS
            });
    }
}


export const saveUser = () => {
    return async (dispatch, getState) => {
        let
            state = getState(),

            updUser = await uAPI.updateUser(
                state.user.name, {
                score: state.question.score
            });

        if (updUser.status == 200)
            dispatch({
                payload: updUser,
                type: user.SAVE_USER
            });
    }
}