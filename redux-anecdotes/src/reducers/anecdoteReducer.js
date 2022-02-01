const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


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
const generateId = () =>
Number((Math.random() * 1000000).toFixed(0))

export const newAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      votes: 0,
      id: generateId()
    }
  }
}
export const newVote = (id) => {
  return {
    type: 'VOTE',
    data:{ id }
  }
}
export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

export default reducer