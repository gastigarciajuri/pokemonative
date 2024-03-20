// Detail.js
import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet } from "react-native"
import { getApiInfo } from '../api/services'

export const Detail = () => {
    const [pokeInfo, setPokeInfo] = useState([])

    useEffect(() => {
        async function fetchData() {
            const pokeDetail = await getApiInfo();
            setPokeInfo(pokeDetail)
        }
        fetchData();
    }, [])
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Pokemones</Text>
            {pokeInfo.map(p => (
                <Text key={p.id} style={styles.text}>{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,     
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
    }
});
