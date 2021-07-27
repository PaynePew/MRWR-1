// Import the React and ReactDOM libraries
import { directive } from '@babel/types'
import React from 'react'
import ReactDOM from 'react-dom'
// Live Reloading
if (module.hot) {
  module.hot.accept()
}

function getButtonText () {
  return 'Click on Me!'
}

// create a react component

const App = () => {
  const buttonText = { text: 'Click me' }
  const style = { backgroundColor: 'blue', color: 'white' }
  const labelText = 'Enter name:'

  return (
    <div>
      <label className='label' htmlFor='name'>
        {labelText}
      </label>
      <input type='text' id='name' />
      <button style={style}>
        {buttonText.text}
      </button>
      {/* <button style="background-color:blue; color: white">Submit</button> */}
    </div>
  )
}

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
