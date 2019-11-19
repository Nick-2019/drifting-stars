const textBoxReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD':
            state.push(action.payload)

            return state
            // state.push(action.payload);
            // return state
        case 'CLEAR':
            return state = []
        default:
            return state
    }
}


export default textBoxReducer