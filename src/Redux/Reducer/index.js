import { FILTRA_PROPS, GET_PROPS } from "../Actions/ActionsType";

const initialState = {
    propiedades: [],
};


export default function rootReducer (state = initialState, action) {
    switch(action.type){
        case GET_PROPS:
            return {
                ...state,
                propiedades: action.payload
            };
        case FILTRA_PROPS:
            const props = [...state.propiedades];
            let propsFiltradas = props.filter(p => p.tipo === action.payload);
            return{
                ...state,
                propiedades: propsFiltradas
            } 
        default:
            return state;
    }
};