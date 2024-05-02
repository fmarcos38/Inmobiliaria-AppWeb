import { FILTRA_PROPS, GET_PROPS } from "./ActionsType";

//trae props
export const getProps = (props) => {
    return function(dispatch){        
        dispatch({type: GET_PROPS, payload: props});    
    }
};

//filtra por tipo de prop
export const filtraTipo = (tipo) => {
    return function(dispatch){
        dispatch({type: FILTRA_PROPS, payload: tipo})
    }
};