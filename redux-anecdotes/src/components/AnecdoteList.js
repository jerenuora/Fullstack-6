import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newVote } from '../reducers/anecdoteReducer'


const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => state)
    anecdotes.sort((a, b) => b.votes - a.votes )
    
    const dispatch = useDispatch()
    const vote = (id) => {
        console.log('vote', id)
        dispatch(newVote(id))
    }

    return (
        anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
            </div>

        )
    
    )

}

export default AnecdoteList