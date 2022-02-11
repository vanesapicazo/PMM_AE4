import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navegacion = useNavigation();
    return(
        <View style = {estilos.contenido}>
            <Text style = {estilos.titulo}> Home </Text>
            <Button titulo = "Abrir modal"
                    onPress={() => navegacion.navigate('Pantalla modal')} 
            ></Button>
        </View>
    );
};

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

export default Home;