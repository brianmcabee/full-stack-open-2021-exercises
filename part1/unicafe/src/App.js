import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)
  const [allFeedback, setAllFeedback] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const giveGoodFeedback = () => {
    setAllFeedback({...allFeedback, good: allFeedback.good + 1 })
  }

  const giveNeutralFeedback = () => {
    setAllFeedback({...allFeedback, neutral: allFeedback.neutral + 1 })
  }

  const giveBadFeedback = () => {
    setAllFeedback({...allFeedback, bad: allFeedback.bad + 1 })
  }
  
  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={giveGoodFeedback} text="Good"/>
      <Button onClick={giveNeutralFeedback} text="Neutral"/>
      <Button onClick={giveBadFeedback} text="Bad"/>

      <Statistics feedback={allFeedback}/>
    </>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const Statistics = ({feedback}) => {
  let totalVotes = feedback.good + feedback.bad + feedback.neutral 
  let avgScore = (feedback.good + (feedback.bad * -1)) / totalVotes || 0
  let positiveRatio = feedback.good / totalVotes || 0
  positiveRatio = positiveRatio + " %"

  if (feedback.good === 0 & feedback.neutral === 0 && feedback.bad === 0  ) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    )
  } else {
    
  }
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={feedback.good}/>
          <StatisticLine text="Neutral" value={feedback.neutral}/>
          <StatisticLine text="Bad" value={feedback.bad}/>
          <StatisticLine text="All" value={totalVotes}/>
          <StatisticLine text="Average" value={avgScore}/>
          <StatisticLine text="Positive" value={positiveRatio}/>
        </tbody>
      </table>
    </>
  )
}

const StatisticLine = (props) => {
  return(
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  )
}

export default App