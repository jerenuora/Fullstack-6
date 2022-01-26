import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import reducer from './reducers/anecdoteReducer'
import { newAnecdote, newVote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  anecdotes.sort((a, b) => b.votes - a.votes )
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(newVote(id))
  }
  const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(newAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App