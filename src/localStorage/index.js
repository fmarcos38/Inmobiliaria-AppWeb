//--creación de un hook personalizado, para el amnejo de favoritos en localStorage

import { useState } from "react";

function useLocalStorage(){

    //estado para el array de fav
    const [fav, setFav] = useState([]);

    //
    const creaTraeArray = () => {
        //creo variable donde guarderé el array q está en el localStorage
        let parsedArrayFav;
        //busco si ya existe un array de fav
        const localStorageFav = localStorage.getItem('arrayfav');
        //si no existe lo creo
        if(!localStorageFav) {
            localStorage.setItem('arrayfav',JSON.stringify(fav));
        }else{
            parsedArrayFav = JSON.parse(localStorageFav);
            setFav(parsedArrayFav);            
        }
    };

    //---creo funcion que agrega o quita id del array fav----
    const agregaQuitaFav = (id_prop) => { console.log("llegó:", id_prop)
        //busco si existe la propiedad
        const prop = fav.find(p => p.id === id_prop);
        if(!prop){
            const arrayP = [...fav, id_prop]; //solo guardo los id de las props
            setFav(arrayP); //actualizo estado
            localStorage.setItem('arrayfav', JSON.stringify(fav));//agrego el array actualizado al storage
        }else{
            const newArray = fav.filter(p => p.id !== id_prop);
            setFav(newArray);
            localStorage.setItem('arrayfav', JSON.stringify(fav));
        }
    };

    return {
        fav,
        creaTraeArray,
        agregaQuitaFav,
    }
};

export { useLocalStorage };