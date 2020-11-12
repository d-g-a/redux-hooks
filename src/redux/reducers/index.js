import {SUCCESS_GET_TACO,} from "../actions/types"

const defaultState = {
    working: true,
    taco: {},
    loadingTaco: true
}

export default (state = defaultState, action) => {
    switch(action.type){
        case SUCCESS_GET_TACO:
            return {
                ...state,
                taco: action.payload,
                loadingTaco: false
            }
        default:
            return state
    }
}