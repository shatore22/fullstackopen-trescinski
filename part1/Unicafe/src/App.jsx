import { useState } from 'react'
import Statistics from '../Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const refresh = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <App counter={counter} />
    )
  }

  const goodHandler = () => {
    setGood(good + 1)
    refresh()
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => goodHandler()}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <Statistics />
    </div>
  )
}

export default App