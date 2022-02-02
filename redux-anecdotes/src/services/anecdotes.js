import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const createNew = async (content) => {
    const obj = {content, votes: 0}
    const res = await axios.post(baseUrl, obj)
    return res.data
}

const vote = async (anecdote) => {
    const obj = { content:anecdote.content, id:anecdote.id, votes: anecdote.votes +1}
    return axios.put(`${baseUrl}/${anecdote.id}`, obj)
}
export default { getAll, createNew, vote }