import { createStore } from 'redux'
import reducer from './reducers/countReuder'
const store = createStore(
    reducer
)
export default store