/*
 * @Author: 寒嫣
 * @Date: 2019-10-18 17:22:41
 * @Description: file content
 */
import * as types from '../actions/countAction'

// const initState = {
//     count: 0
// }
// export default (state = initState, action) => {
//     switch (action.type) {
//         case types.ADD_COUNT:

//     }
//     return state;
// }
const reducer = (state = {
    count: 0
}, action) => {
    switch (action.type) {
        case types.ADD_COUNT:
            return {
                count: state.count + 1
            }
        default:
            return state
    }

}
export default reducer