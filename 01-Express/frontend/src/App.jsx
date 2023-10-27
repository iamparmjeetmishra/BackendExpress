import { useEffect, useState } from "react"
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
      setJokes(response.data)
      })
      .catch((error) => {
      console.log(`error: ${error}`)
    })
  })

  return (
    <div>
      <h2>Jokes App</h2>
      <p> Jokes: {jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App