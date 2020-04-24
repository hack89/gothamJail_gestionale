import { GET_OFFICERS, ADD_OFFICER } from './types'
import axios from 'axios'

export const getOfficer = () => async dispatch => {
    try {
        const res = await axios.get('/officers');


        dispatch({
            type: GET_OFFICERS,
            payload: res.data
        })

    } catch (error) {
        console.log(error)
    }
}




export const addOfficer = (officer) => async dispatch => {
    try {

        const res = await fetch('/officers', {
            method: 'POST',
            body: JSON.stringify(officer),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()

        dispatch({
            type: ADD_OFFICER,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}