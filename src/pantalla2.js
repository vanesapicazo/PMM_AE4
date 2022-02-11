import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import stack1 from './stack1';
import stack2 from './stack2';

const stack = createStackNavigator();

const Pantalla2 = () => {
    return (
        <stack.Navigator options="false" >
            <stack.Screen name="stack1" component={stack1} options={{ headerShown: false }}/>
            <stack.Screen name="stack2" component={stack2} options={{ headerShown: false }}/>
        </stack.Navigator>
    )
}

export default Pantalla2