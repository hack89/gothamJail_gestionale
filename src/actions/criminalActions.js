import { GET_CRIMINALS, GET_SINGLE_CRIMINAL, ADD_CRIMINAL, EDIT_CRIMINAL } from './types'

import axios from 'axios'

export const getCriminal = () => async dispatch => {
    try {
        const res = await axios.get('/criminals');

        dispatch({
            type: GET_CRIMINALS,
            payload: res.data
        })

    } catch (error) {
        console.log(error)
    }
}


export const getSingleCriminal = (id) => async dispatch => {
    try {
        const res = await axios.get(`/criminals/${id}`);
        console.log(res)

        dispatch({
            type: GET_SINGLE_CRIMINAL,
            payload: res.data
        })

    } catch (error) {
        console.log(error)
    }
}


export const addCriminal = (criminal) => async dispatch => {
    try {

        const res = await fetch('/criminals', {
            method: 'POST',
            body: JSON.stringify(criminal),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()

        dispatch({
            type: ADD_CRIMINAL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}


export const editCriminal = (criminal, id) => async dispatch => {
    try {

        const res = await fetch(`/criminals/${id}`, {
            method: 'PUT',
            body: JSON.stringify(criminal),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()

        dispatch({
            type: EDIT_CRIMINAL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}