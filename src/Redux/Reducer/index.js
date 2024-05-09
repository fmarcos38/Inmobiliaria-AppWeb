import { 
    DETALLE_PORP, FILTRA_OPERACION_TIPO, GET_PROPS, IS_OPEN_MODAL_PICTURE, 
    RESET_DETALLE,  
} from "../Actions/ActionsType";

const initialState = {
    propiedades: [],
    propsFiltradas: [],
    tipoOp: [],
    detalleProp: {},
    isOpenModalPicture: false,
};


export default function rootReducer (state = initialState, action) {
    switch(action.type){
        case GET_PROPS:
            return {
                ...state,
                propiedades: action.payload,
            };
        case FILTRA_OPERACION_TIPO: 
            let propsF = [...state.propiedades];
            const {operacion, tipo} = action.payload;
            propsF = propsF.filter(p => {
                if(operacion && tipo){
                    return p.operacion === operacion && p.tipo === tipo;
                }else if(operacion){
                    return p.operacion === operacion;
                }else if(tipo){
                    return p.tipo === tipo;
                }else{
                    return propsF;
                }
            });            
            return{
                ...state,
                propiedades: propsF,
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