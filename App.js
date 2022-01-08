import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NuevaOrden } from './views/NuevaOrden';
import { Menu } from './views/Menu';
import { FormularioPlatillo } from './views/FormularioPlatillo';
import { DetallePlatillo } from './views/DetallePlatillo';
import { ResumenPedido } from './views/ResumenPedido';
import { ProgresoPedido } from './views/ProgresoPedido';

import { FirebaseState } from './context/firebase/firebaseState';

const Stack = createStackNavigator();

const App = () => {
  

  return (
    <>
      <FirebaseState>
        <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerTitleAlign: 'center',
                  headerStyle:{
                    backgroundColor: '#F0C92F'
                  },
                  headerTitleStyle:{
                    fontWeight: 'bold'
                  },
                  headerTintColor: '#000'
                }}
              >
                  <Stack.Screen
                    name='NuevaOrden'
                    component={NuevaOrden}
                    options={{
                      title:"Nueva Orden"
                    }}
                  />

                  <Stack.Screen
                    name='Menu'
                    component={Menu}
                    options={{
                      title:"Menú"
                    }}
                  />

                  <Stack.Screen
                    name='DetallePlatillo'
                    component={DetallePlatillo}
                    options={{
                      title:"Detalle Platillo"
                    }}
                  />
                  
                  <Stack.Screen
                    name='formularioPlatillo'
                    component={FormularioPlatillo}
                    options={{
                      title:"Ordenar Platillo"
                    }}
                  />

                  <Stack.Screen
                    name='ResumenPedido'
                    component={ResumenPedido}
                    options={{
                      title:"Resumen Pedido"
                    }}
                  />

                  <Stack.Screen
                    name="ProgresoPedido"
                    component={ProgresoPedido}
                    options={{
                      title:"Progreso del Pedido"
                    }}
                  />
              </Stack.Navigator>
            </NavigationContainer>
          </FirebaseState>
    </>
  );
};


export default App;
