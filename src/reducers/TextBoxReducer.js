const initialUserState = {
    arr:[]
}


const textBoxReducer = (state = initialUserState, action) => {

    
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                arr: state.arr.concat([action.payload])
            }
        case 'CLEAR':
            return{
                ...state,
                arr: []
            }
        default:
            return state
    }
}


export default textBoxReducer