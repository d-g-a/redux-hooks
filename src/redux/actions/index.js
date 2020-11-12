import { GET_TACO, SUCCESS_GET_TACO } from "./types"

const getTaco = () =>({
    type: GET_TACO
})

const successGetTaco = (payload) =>({
    type: SUCCESS_GET_TACO,
    payload
})

export const fetchTaco = function(payload){
    return async function(dispatch){
        dispatch({type: "GET_TACO"})
        const response = await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
        const data = await response.json()
        dispatch(successGetTaco(data))
    }
}