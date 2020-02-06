import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addReview } from '../../actions/review'

export class ImageForm extends Component {
  state = {
    city_name: '',
    traveller_name: '',
    traveller_review: '',
    review_img: '',
  }

  static propTypes = {
    addReview: PropTypes.func.isRequired
  }
  onImageChange = e => {
    this.setState({
      review_img: e.target.files[0]
    })
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    let review = new FormData()
    review.append('review_img', this.state.review_img, this.state.review_img.name)
    review.append('city_name', this.state.city_name)
    review.append('traveller_review', this.state.traveller_review)
    review.append('traveller_name', this.state.traveller_name)
    this.props.addReview(review)
    this.setState({
        city_name: "",
        traveller_name: "",
        traveller_review: "",
        review_img: " "
      })
    }

  render() {
    const { city_name, traveller_name, traveller_review, review_img } = this.state
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Review</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>City Name</label>
            <input
              className="form-control"
              type="text"
              name="city_name"
              onChange={this.onChange}
              value={city_name}
              required
            />
          </div>
          <div className="form-group">
            <label>Traveller Name</label>
            <input
              className="form-control"
              type="text"
              name="traveller_name"
              onChange={this.onChange}
              value={traveller_name}
              required
            />
          </div>
          <div className="form-group">
            <label>Review</label>
            <textarea
              className="form-control"
              type="text"
              name="traveller_review"
              onChange={this.onChange}
              value={traveller_review}
              required
            />
          </div>
          <div className="form-group">
              <label>Review Image</label>
              <input 
                  className = "form-control"
                  type="file"
                  name="review_img"
                  onChange={this.onImageChange}
              />
            </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" onClick={this.state}>
              Submit
            </button>
            <Link to="/">
                <button type="submit" className="btn btn-primary">
                        Home
                </button>
            </Link>         
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addReview })(ImageForm)