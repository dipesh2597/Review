import axios from 'axios'
import {GET_REVIEW, DELETE_REVIEW, ADD_REVIEW} from './types'

// getting all reviews in a variable
export const getReview = () => dispatch => {
     axios
        .get('/api/review/')
        .then(res => {
            dispatch({
                type: GET_REVIEW,
                payload: res.data
            })
         })
         .catch(err => console.log(err))

 }
// Delete review
export const deleteReview = id => dispatch => {
    axios
      .delete(`/api/review/${id}/`)
      .then(res => {
        dispatch({
          type: DELETE_REVIEW,
          payload: id
        })
      })
      .catch(err => console.log(err));
  }
// Add review
export const addReview = review => dispatch => {
    axios
        .post('/api/review/', review)
        .then(res => {
            dispatch({
                type: ADD_REVIEW,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}