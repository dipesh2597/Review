import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addReview } from '../../actions/review'
import { Link } from 'react-router-dom'

export class Form extends Component {
    state = {
        city_name: '',
        traveller_name: '',
        traveller_review: '',
        review_img: '',
      }
    
      static propTypes = {
        addReview: PropTypes.func.isRequired
      }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault()
    const { city_name, traveller_name, traveller_review, review_img } = this.state
    const review = { city_name, traveller_name, traveller_review, review_img }
    this.props.addReview(review);
    this.setState({
        city_name: '',
        traveller_name: '',
        traveller_review: '',
        review_img: '',
    });
  };

  render() {
    const { city_name, traveller_name, traveller_review, review_img } = this.state
    return (
        <Fragment>
        <h2>Upload Review</h2>
        
        <div className="card card-body mt-4 mb-4">
        
        <Link to="/review/image-upload/">
            <button type="submit" className="btn btn-primary">
                    Upload Image
            </button>
        </Link>
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
            <button type="submit" className="btn btn-primary" onClick={this.state}>
              Submit
            </button>
            <Link to="/">
                <button type="submit" className="btn btn-primary">
                        Home
                </button>
            </Link>
        </form>
      </div>
      </Fragment>
    )
  }
}

export default connect(null,{ addReview })(Form);