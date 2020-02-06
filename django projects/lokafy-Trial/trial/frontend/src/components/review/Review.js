import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getReview, deleteReview } from '../../actions/review'
import { Link } from 'react-router-dom'

export class Review extends Component {
 static propTypes = {
     review: PropTypes.array.isRequired,
     getReview: PropTypes.func.isRequired,
     deleteReview: PropTypes.func.isRequired
 }

 componentDidMount() {
      this.props.getReview()
      }

render() {
    return (
             <Fragment>
                 <table className="table table-striped container">
                     <thead>
                         <tr>
                             <th>ID</th>
                             <th>City Name</th>
                             <th>Traveller Name</th>
                             <th>Review text</th>
                             <th>Review Image</th>
                             <th> Remove</th>
                         </tr>
                     </thead>
                     <tbody>
                         { this.props.review.map(review => (
                            <tr key={review.id}>
                                 <td>{review.id}</td>
                                 <td>{review.city_name}</td>
                                 <td>{review.traveller_name}</td>
                                 <td>{review.traveller_review}</td>
                                 <td>{review.review_img}</td>
                                 <td><button onClick = {this.props.deleteReview.bind(this, review.id)}className="btn btn-danger btn-sm">
                                    {" "}
                                    Delete
                                    </button>
                                 </td>
                            </tr>
                         ))}
                     </tbody>
                 </table>
                 <Link to="/review/upload/"><button type="submit" className="btn btn-primary">
                    Upload Review
                 </button></Link>
             </Fragment>
         )
     }
  }

const mapStateToProps = state => ({
     review: state.review.review  //here we are taking review reducers
})

export default connect(mapStateToProps, { getReview, deleteReview })(Review)