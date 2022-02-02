import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { notificationSetter } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.newAnecdote(content)
        props.notificationSetter(`Added ${content}`, 5)
      }
    
    return(
        <div>
      <h2>Create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
      </div>
    )
}

export default connect(
    null,
    { newAnecdote, 
        notificationSetter }
)(AnecdoteForm)