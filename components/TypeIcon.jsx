import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const TypeIcon = ({ type }) => {
  // Transforma el nombre del tipo en el formato adecuado para la ruta de la imagen
  const imageName = type.toLowerCase() + '.jpg';

  let imagePath;
  switch (type.toLowerCase()) {
    case 'electric':
      imagePath = require('../assets/types/electric.jpg');
      break;
    case 'fire':
      imagePath = require('../assets/types/fire.jpg');
      break;
    case 'water':
      imagePath = require('../assets/types/water.jpg');
      break;
    case 'grass':
      imagePath = require('../assets/types/grass.jpg');
      break;
    case 'ice':
      imagePath = require('../assets/types/ice.jpg');
      break;
    case 'fighting':
      imagePath = require('../assets/types/fighting.jpg');
      break;
    case 'poison':
      imagePath = require('../assets/types/poison.jpg');
      break;
    case 'normal':
      imagePath = require('../assets/types/normal.jpg');
      break;
    case 'ground':
      imagePath = require('../assets/types/ground.jpg');
      break;
    case 'flying':
      imagePath = require('../assets/types/flying.jpg');
      break;
    case 'psychic':
      imagePath = require('../assets/types/psychic.jpg');
      break;
    case 'bug':
      imagePath = require('../assets/types/bug.jpg');
      break;
    case 'rock':
      imagePath = require('../assets/types/rock.jpg');
      break;
    case 'ghost':
      imagePath = require('../assets/types/ghost.jpg');
      break;
    case 'dragon':
      imagePath = require('../assets/types/dragon.jpg');
      break;
    case 'dark':
      imagePath = require('../assets/types/dark.jpg');
      break;
    case 'steel':
      imagePath = require('../assets/types/steel.jpg');
      break;
    case 'fairy':
      imagePath = require('../assets/types/fairy.jpg');
      break;
    default:
      // Si el tipo no coincide con ninguno de los casos anteriores, usa una imagen predeterminada
      imagePath = require('../assets/types/default.jpg');
      break;
  }

  return (
    <View style={styles.iconContainer}>
      <Image source={imagePath} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 5, // Espacio entre iconos
  },
  icon: {
    width: 30, // Tamaño ajustable de los iconos
    height: 30, // Tamaño ajustable de los iconos
  },
});

export default TypeIcon;
