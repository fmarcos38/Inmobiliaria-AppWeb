import { DETALLE_PORP, FILTRA_PROPS, GET_PROPS, IS_OPEN_MODAL_PICTURE, RESET_DETALLE } from "../Actions/ActionsType";

const initialState = {
    propiedades: [],
    detalleProp: {},
    isOpenModalPicture: false,
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
            };
        case IS_OPEN_MODAL_PICTURE:
            return{
                ...state,
                isOpenModalPicture: !state.isOpenModalPicture,
            };
        default:
            return state;
    }
};