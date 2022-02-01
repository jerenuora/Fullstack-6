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
    const vote = (id) => {
        console.log('vote', id)
        dispatch(newVote(id))
        const voted = anecdotes.find(a => a.id === id)
        dispatch(notificationSetter(`Voted ${voted.content}`))
        setTimeout(() => dispatch(notificationClearer('')),5000)

    }

    return (
        anecdotesToShow.map(anecdote =>
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