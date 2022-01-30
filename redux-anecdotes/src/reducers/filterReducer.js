const filterReducer = (state = '', action) => {
    switch (action.type){
        case 'SET_FILTER':
            return action.filterWord
        default:
            return state
    }
}
export const filterChange = filterWord => {
    return {
      type: 'SET_FILTER',
      filterWord,
    }
  }

  export default filterReducer