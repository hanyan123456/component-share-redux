import React from 'react';
import './App.css';
import Parents from './components/parents'
import Child from './components/child'
import { Provider } from "react-redux"
import store from './redux'
function App() {
  return (
    <div className="App">
      <Parents></Parents>
      <Provider store={store}>
        <Child></Child>
      </ Provider>
    </div>
  );
}

export default App;
