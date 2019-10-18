import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as Types from '../redux/actions/countAction';
// import *as Actions from '../redux/actions/actionsCreators'
import store from '../redux'
// import { connect } from 'react-redux'
class Parents extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            // count: 0
            count: store.getState().count
        };
    }
    addCount = () => {
        const action = {
            type: Types.ADD_COUNT
        }
        store.dispatch(action)
    }
    componentDidMount() {

        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange = () => {

        this.setState(store.getState())
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <span>父组件</span>
                <button onClick={this.addCount}>增加</button>
                <span>{count}</span>
            </div>
        );
    }
}

Parents.propTypes = {};

export default Parents;