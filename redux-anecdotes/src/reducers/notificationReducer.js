

const notificationReducer = (state = '', action) => {

    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.notification
        default:
            return state
    }
}
export const notificationSetter = (notification, time) => {
    return async dispatch => {
        dispatch(
        {
        type: 'SET_NOTIFICATION',
        notification
    })
    setTimeout(() => dispatch(notificationClearer('')),time*1000)
}
}
export const notificationClearer = notification => {
    return {
        type: 'SET_NOTIFICATION',
        notification
    }
}

export default notificationReducer