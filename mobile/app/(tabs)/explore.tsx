import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const jogos = [
  {
    id: 1,
    nome: 'Bubble Shooter',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwqIIKAYLQ5PQgJixk8Jlf3mKrlCPh4ZiMOBiWp7Rhy0btVJH9FchGykEJj6dG4f1T17GzOCV3VvGF9dwDwN9gBIHmbg3RJnFK9-MQ5Q-_g',
  },
  {
    id: 2,
    nome: 'Temple Run 2',
    imagem: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=204,height=204,fit=cover,f=auto/b5c8b617f65be7cc4d56dd3657590ae7/temple-run-2.png',
  },
  {
    id: 3,
    nome: 'Fashion Style',
    imagem: 'https://via.placeholder.com/120x120/4CAF50/white?text=Fashion',
  },
  {
    id: 4,
    nome: 'Puzzle Game',
    imagem: 'https://via.placeholder.com/120x120/2196F3/white?text=Puzzle',
  },
  {
    id: 5,
    nome: 'Racing',
    imagem: 'https://via.placeholder.com/120x120/FF9800/white?text=Racing',
  },
  {
    id: 6,
    nome: 'Adventure',
    imagem: 'https://via.placeholder.com/120x120/9C27B0/white?text=Adventure',
  },
];

const Explore = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Explore Jogos</Text>
      </View>
     
      {/* Grid de Jogos */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.gameGrid}>
          {jogos.map(jogo => (
            <TouchableOpacity key={jogo.id} style={styles.gameCard}>
              <Image
                source={{ uri: jogo.imagem }}
                style={styles.gameImage}
                onError={(e) => console.log('Erro ao carregar imagem:', e.nativeEvent.error)}
              />
              <Text style={styles.gameName}>{jogo.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f51b5',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#3f51b5',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  scrollContainer: {
    padding: 10,
  },
  gameGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  gameCard: {
    width: (width - 60) / 2,
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gameImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginBottom: 10,
  },
  gameName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Explore;
