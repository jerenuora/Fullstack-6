import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      console.log(action.data.id)
      const anecdoteToVote = state.find(a => a.id === id)
      console.log(anecdoteToVote)
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes +1 
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : votedAnecdote 
      ) 
    default:
      return state

  }
}

export const newAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data
  }
}

export const newVote = (id) => {
  return {
    type: 'VOTE',
    data:{ id }
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    console.log(anecdotes)
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export default reducer