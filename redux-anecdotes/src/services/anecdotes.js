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

const vote = async (id, content,votes) => {
    const obj = { content:content, id:id, votes: votes +1}
    return axios.put(`${baseUrl}/${id}`, obj)
}
export default { getAll, createNew, vote }