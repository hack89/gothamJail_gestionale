import { GET_CRIMINALS, GET_SINGLE_CRIMINAL, ADD_CRIMINAL, EDIT_CRIMINAL } from "../actions/types";

const initialState = {
    criminals: [],
    isLoading: true,
    singleCriminal: null
}


export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_CRIMINALS:
            return {
                ...state,
                isLoading: false,
                criminals: payload,
            }

        case GET_SINGLE_CRIMINAL:
            return {
                ...state,
                isLoading: false,
                singleCriminal: payload,
            }
        case ADD_CRIMINAL:
        case EDIT_CRIMINAL:
            return {
                ...state,
                criminals: [...state.criminals, payload],
                isLoading: false
            }



        default:
            return state;
    }
}