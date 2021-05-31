import logo from './logo.svg';
import './App.css';
import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <h2>
        {part1} {exercises1}
      </h2>
      <h2>
        {part2} {exercises2}
      </h2>
      <h2>
        {part3} {exercises3}
      </h2>
      <h2>Number of exercises {exercises1 + exercises2 + exercises3}</h2>
    </div>
  )
}

export default App