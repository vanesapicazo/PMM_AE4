import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Stack1 = (props) => {
    return (
        <View style={estilos.layout}>
            <Text style={estilos.titulo}>Pantalla Stack 1</Text>
            <Button
                title="Continuar"
                onPress={() => props.navegacion.navigate('Stack2')}
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


export default Stack1;