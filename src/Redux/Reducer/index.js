import { DETALLE_PORP, FILTRA_PROPS, GET_PROPS, RESET_DETALLE } from "../Actions/ActionsType";

const initialState = {
    propiedades: [],
    detalleProp: {},
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
            }; 
        case DETALLE_PORP:
            console.log("idP-Re: ", action.payload);
            const arrProp = [...state.propiedades]; 
            let det_prop = arrProp.find(p => p.id === action.payload);            
            return{
                ...state,
                detalleProp: det_prop
            };
        case RESET_DETALLE:
            return{
                ...state,
                detalleProp: {}
            }
            default:
            return state;
    }
};