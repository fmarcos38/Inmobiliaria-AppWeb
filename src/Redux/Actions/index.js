import { propiedades } from "../../Helps/propiedades";
import { 
    DETALLE_PORP, FILTRA_OPERACION_TIPO,  GET_PROPS, IS_OPEN_MODAL_PICTURE, 
    RESET_DETALLE, RESET_PROPS,  
} from "./ActionsType";

//trae props
export const getProps = (props = propiedades) => {
    return function(dispatch){        
        dispatch({type: GET_PROPS, payload: props});    
    }
};

//filtra por operacion venta
export const filtraOperacionTipo = (obj) => {
    console.log("oper: ", obj);
    return function(dispatch){
        dispatch({type: FILTRA_OPERACION_TIPO, payload: obj});
    }
};

export const reset_props = () => {
    return function(dispatch){
        dispatch({type: RESET_PROPS});
    }
}
//detalle prop
export const detalleProp = (id) => {
    return function(dispatch){
        dispatch({type: DETALLE_PORP, payload: id});
    }
}

//reset detalle
export const resetDetalle = () => {
    return function(dispatch) {
        dispatch({ type: RESET_DETALLE });
    }
};

//cierra Modal imagen prop
export const isOpenModalPicture = () => {
    return function(dispatch){
        dispatch({type: IS_OPEN_MODAL_PICTURE});
    }
};