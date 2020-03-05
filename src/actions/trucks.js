import {axiosWithAuth} from '../utils/axiosWithAuth';

export const GET_TRUCKS = 'GET_TRUCKS';
export const ADD_TRUCK = 'ADD_TRUCK'; 
export const DELETE_TRUCK = 'DELETE_TRUCK';
export const EDIT_TRUCK = 'EDIT_TRUCK';
export const UPDATE_TRUCK = 'UPDATE_TRUCK';

export const getTrucks = (load) => dispatch => {
    dispatch({type: GET_TRUCKS, payload: load});

};

export const editTrucks = (update, id) => dispatch => {
    // console.log(update);
    
    axiosWithAuth()
    .put(`operators/trucks/${id}`,update)
    .then(resp => {
        console.log('resp',resp);
        dispatch({type: EDIT_TRUCK, payload: { data:update, key:id } })
    })
    .catch(err => console.log(err));

};

export const deleteTrucks = (id) => dispatch => {
    dispatch({type: DELETE_TRUCK, payload: id})

};

export const addTrucks = (load) => dispatch => {
    dispatch({type: ADD_TRUCK, payload: load});

};

export const updateTruck = (data) => dispatch => {
    dispatch({type: UPDATE_TRUCK, payload:data});

};