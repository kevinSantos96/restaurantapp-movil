import React, {useContext, useEffect} from 'react';
import {Text} from 'react-native';
import { FirebaseContext } from '../context/firebase/firebaseContext'
export const Menu = () => {
    
    //Context de firebase

    const {obtenerProductos}= useContext(FirebaseContext)

    useEffect(() => {
         
        obtenerProductos();

    }, [])


    return (
        <Text>
            Menú
        </Text>
    )
}
