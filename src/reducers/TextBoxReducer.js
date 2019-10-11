const textBoxReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD':
            return state.push(action.payload)
        case 'CLEAR':
            return state = []
        default:
            return state
    }
}


export default textBoxReducer