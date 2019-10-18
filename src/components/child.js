import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import store from '../redux';
class Child extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        console.log(this.props.count)
        this.state = {
            // count: this.props.count
        };
    }

    render() {
        // const { count } = this.props.state.count
        return (
            <div>
                <span>子组件</span>
                <div>{this.props.state.count}</div>
            </div>
        );
    }
}

Child.propTypes = {};

// export default Child;
export default connect((state) => {
    return {
        state: state
    }
})(Child)