import { GET_REVIEW, DELETE_REVIEW, ADD_REVIEW } from '../actions/types.js'

const initialState = {
    review: []
}

export default function (state = initialState, action){
    switch(action.type) {
        case GET_REVIEW: 
            return {
                ...state,  
                review: action.payload
            }
        case DELETE_REVIEW:
            return {
                ...state,
                review: state.review.filter(review =>   review.id !== action.payload)
            }
        case ADD_REVIEW:
            return {
                ...state,
                review: [...state.review, action.payload]
            }

        default:
            return state
    }
}
