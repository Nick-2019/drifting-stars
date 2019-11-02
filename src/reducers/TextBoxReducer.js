const textBoxReducer = (state = ["Apple", "Papaya"], action) => {
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