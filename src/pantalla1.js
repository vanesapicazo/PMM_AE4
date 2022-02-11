import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';
import pantallamodal from './pantallamodal';

const stack = createStackNavigator();

const Pantalla1 = () => {
    const navegacion = useNavigation();
    return (
        <stack.Navigator>
            <stack.Group>
                <stack.Screen name='pantalla 1' component={Home} options={{ headerShown: false }} />
            </stack.Group>
            <stack.Group screenOptions={{ presentation: 'modal' }}>
                <stack.Screen name='pantallamodal' component={pantallamodal} />
            </stack.Group>
        </stack.Navigator>
    );
};

export default Pantalla1;