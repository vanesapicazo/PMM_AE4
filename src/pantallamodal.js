import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function PantallaModal({ navegacion }) {
    return (
        <View style={estilos.contenido}>
            <Text style={estilos.titulo}>Pantalla Modal</Text>
            <Button
                title='Atrás'
                onPress={() => navegacion.goBack()}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    contenido: {
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

export default PantallaModal;