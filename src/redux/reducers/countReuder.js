/*
 * @Author: 寒嫣
 * @Date: 2019-10-18 17:22:41
 * @Description: file content
 */
import * as types from '../actions/countAction'

const reducer = (state = {
    count: 0
}, action) => {
    switch (action.type) {
        case types.ADD_COUNT:
            console.log(state.count + 1)
            return {
                count: state.count + 1
            }
            default:
                return state
    }

}
export default reducer;