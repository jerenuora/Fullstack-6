import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newVote } from '../reducers/anecdoteReducer'
import { notificationSetter, notificationClearer } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => state.anecdotes)
    console.log('anecdotes', anecdotes)
    anecdotes.sort((a, b) => b.votes - a.votes )
    const filterWord = useSelector(state => state.filterWord)
    const anecdotesToShow = anecdotes.filter(
        a => a.content.toLowerCase()
        .indexOf(filterWord.toLowerCase()) > -1)

    console.log(filterWord)
    
    const dispatch = useDispatch()
    const vote = (anecdote) => {
        console.log('vote', anecdote.id, anecdote.content)
        dispatch(newVote(anecdote))
        const voted = anecdotes.find(a => a.id === anecdote.id)
        dispatch(notificationSetter(`Voted ${voted.content}`, 5))

    }

    return (
        anecdotesToShow.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
            </div>
            </div>

        )
    
    )

}

export default AnecdoteList