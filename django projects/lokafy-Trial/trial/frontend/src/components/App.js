import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Header from './layout/Header'
import Review from './review/Review'
import Form from './review/Form'
import ImageForm from './review/ImageForm'
import { Provider } from 'react-redux'
import store from '../store'
import {HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
    render() {
         return (
            <Provider store={store}>
                <Router>
                 <Fragment>
                     <Header />
                        <div className="container-fluid">
                            <Route exact path="/" component={Review} />
                        </div>
                        <div className="container card-body mt-4 mb-4">
                            <Route exact path="/review/upload/" component ={Form} />
                        </div>
                        <div className="container card-body mt-4 mb-4">
                            <Route exact path="/review/image-upload/" component ={ImageForm} />
                        </div>
                 </Fragment>
                </Router>
            </Provider>
         )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))