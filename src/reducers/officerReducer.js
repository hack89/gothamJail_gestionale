import { GET_OFFICERS, ADD_OFFICER } from "../actions/types";

const initialState = {
    officers: [],
    isLoading: true
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_OFFICERS:
            return {
                ...state,
                officers: payload,
                isLoading: false
            }

        case ADD_OFFICER:
            return {
                ...state,
                officers: [...state.officers, payload],
                isLoading: false
            }

        default:
            return state;
    }
}