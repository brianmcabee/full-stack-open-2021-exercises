import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part title={props.parts[0].name} numExercises={props.parts[0].exercises}/>
      <Part title={props.parts[1].name} numExercises={props.parts[1].exercises}/>
      <Part title={props.parts[2].name} numExercises={props.parts[2].exercises}/>
    </>
  )
}

const Part = (props) => {
  return (
    <p>{props.title} {props.numExercises}</p>
  )
}

const Total = (props) => {

  let exerciseTotal = 0

  props.parts.forEach(part => {
    exerciseTotal += part.exercises
  })

  return (
    <p>Number of exercises {exerciseTotal}</p>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App