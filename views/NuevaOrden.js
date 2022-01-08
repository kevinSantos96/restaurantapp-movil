import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider,Container, Button } from 'native-base'

import globalStyles from '../styles/global';

export const NuevaOrden = () => {

    const navigation = useNavigation();

    return(
        <NativeBaseProvider>
            <Container style={globalStyles.contenedor}>
                <View style={[globalStyles.contenido, styles.contenido]}>
                    <Button 
                        style={globalStyles.boton}
                        onPress={()=>navigation.navigate('Menu')}
                    >
                        <Text style={styles.btnTexto}>Agregar Orden</Text>
                    </Button>
                </View>
            </Container>
        </NativeBaseProvider>
    )
}
const styles = StyleSheet.create({
    contenido:{
        flexDirection: 'column',
        justifyContent: 'center'

    },
    btnTexto:{
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#000',
        fontWeight: 'bold'
    }
})