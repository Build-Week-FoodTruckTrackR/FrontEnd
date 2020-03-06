import {GET_TRUCKS,UPDATE_TRUCK} from '../actions/trucks';

const initialState = []


const trucksReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TRUCKS:
            console.log('reducer',action.payload);
            return [
                ...action.payload
            ];
        case UPDATE_TRUCK:
            return [
                ...state.map((item,index) => {
                    if(item.id === action.payload.id){
                        return action.payload
                               
                        
                            
                    }else{
                        return item;
                    }
                })

            ]
        default:
            return state;
    }

}
export default trucksReducer;