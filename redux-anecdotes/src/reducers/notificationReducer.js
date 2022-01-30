

const notificationReducer = (state = '', action) => {

    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.notification
        default:
            return state
    }
}
export const notificationSetter = notification => {
    return {
        type: 'SET_NOTIFICATION',
        notification
    }
}
export const notificationClearer = notification => {
    return {
        type: 'SET_NOTIFICATION',
        notification
    }
}

export default notificationReducer