import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import TypeIcon from "./TypeIcon";

import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Modal,
  Button,
} from "react-native";
import { getApiInfo } from "../api/services";
import ErrorBoundary from "./ErrorBoundary";

const MainPage = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPoke, setSelectedPoke] = useState(null);
  const [modalOn, setModalOn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getApiInfo();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const renderPokemonCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </Text>
        <View style={styles.typesContainer}>
          {/* Itera sobre los tipos del Pokémon y muestra el icono correspondiente */}
          {item.types.map((type, index) => (
            <TypeIcon key={index} type={type} />
          ))}
        </View>
        <Button
          title="Mas info"
          onPress={() => handlePokePress(item)}
        />
      </View>
    </View>
  );

  const handlePokePress = (pokemon) => {
    setSelectedPoke(pokemon);
    setModalOn(true);
  };
  
  return (
    <ErrorBoundary>
      <View style={styles.container}>
        <FlatList
          data={pokemonData}
          renderItem={renderPokemonCard}
          keyExtractor={(item) => item.id.toString()}
        />
        <Modal
                animationType='slide'
                transparent={true}
                visible={modalOn}
                onRequestClose={() => {
                    setModalOn(!modalOn)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {/* Aquí puedes mostrar todos los datos del Pokémon seleccionado */}
                        {selectedPoke && (
         <>
         <Image source={{ uri: selectedPoke.img }} style={styles.modalImage} />
         <Text style={styles.modalText}>
             <Text style={styles.boldText}>Nombre:</Text> {selectedPoke.name.charAt(0).toUpperCase() + selectedPoke.name.slice(1)}
         </Text>
         <Text style={styles.modalText}>
             <Text style={styles.boldText}>Tipos:</Text> {selectedPoke.types.map(type => type.charAt(0).toUpperCase() + type.slice(1)).join(', ')}
         </Text>
         <Text style={styles.modalText}>
             <Text style={styles.boldText}>Velocidad:</Text> {selectedPoke.speed}
         </Text>
         <Text style={styles.modalText}>
             <Text style={styles.boldText}>HP:</Text> {selectedPoke.hp}
         </Text>
         <Text style={styles.modalText}>
             <Text style={styles.boldText}>Ataque:</Text> {selectedPoke.attack}
         </Text>
         <Text style={styles.modalText}>
             <Text style={styles.boldText}>Defensa:</Text> {selectedPoke.defense}
         </Text>
         <Button title="Cerrar" onPress={() => setModalOn(false)} />
     </>
                        )}
                    </View>
                </View>
            </Modal>
      </View>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
},
  container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
  },
  card: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
  },
  image: {
      width: 100,
      height: 100,
      marginRight: 10,
  },
  details: {
      flex: 1,
  },
  name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
  },
  typesContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  type: {
      marginRight: 5,
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 5,
      color: '#fff',
  },
  centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
  },
  modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
  },
  modalText: {
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 16,
  },
  modalImage: {
      width: 200,
      height: 200,
      marginBottom: 10,
  },
});
export default MainPage;
