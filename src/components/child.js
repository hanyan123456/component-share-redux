import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../redux/actions/countAction'
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
                <button onClick={this.props.add}>增加</button>
            </div>
        );
    }
}

Child.propTypes = {};
function mapStateToProps(state) {
    console.log(state)
    return {
        state: state
    }
}
function mapDispathToProps(dispatch) {
    return {
        add() {
            dispatch({
                type: types.ADD_COUNT
            })
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Child)
// export default Child;
// export default connect((state) => {
//     return {
//         state: state
//     }
// })(Child)