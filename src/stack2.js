import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Stack2 = (props) => {
    return (
        <View style={estilos.layout}>
            <Text style={estilos.titulo}>Pantalla Stack 2</Text>
            <Button
                title="Atrás"
                onPress={() => props.navegacion.navigate('Stack1')}
            />
        </View>
    );
};


const estilos = StyleSheet.create({
    layout: {
        justifyContent: 'center',
        flex: 1,
        padding: 10,
    },

    titulo: {
        textAlign: 'center',
        fontSize: 20,
        margin: 25,
        fontWeight: 'bold',
    }
});


export default Stack2;