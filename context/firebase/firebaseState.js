import React, { useReducer, useState } from 'react';

import firebase from '../../firebase';
import { FirebaseContext } from './firebaseContext';
import FirebaseReducer from './firebaseReducer';

import { types } from '../../types/types';

export const FirebaseState = props =>{


    // Crear State Inicial

    const initialState = {
        menu: []
    }
    //nuestro useReducer
     const [state, dispatch] = useReducer(FirebaseReducer, initialState);

    const obtenerProductos = ()=>{
       
        dispatch({
            type: types.obtenerProctutosMenu
        });

        //consultar firebase
        // firebase.db.settings({ experimentalForceLongPolling: true });
        firebase.db.collection('productos').where('existencia','==',true)//trae solo los que estan disponibles en el momento
                                            .onSnapshot(manejarSnapShot);

        function manejarSnapShot(snapshot) {
            let platillos = snapshot.docs.map(doc=>{
                return{
                    id: id.doc.id,
                    ...doc.data() //data es el que tiene toda la informacion en firebase
                }
            });

            console.log(platillos);
        }

    }

    return(
        <FirebaseContext.Provider
            value={{
                
                firebase,
                obtenerProductos
                
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}