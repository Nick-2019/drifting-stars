export const add = (text) => {
    return{
        type: 'ADD',
        payload: text
    }
}

export const clear = () => {
    return{
        type: 'CLEAR',
    }
}