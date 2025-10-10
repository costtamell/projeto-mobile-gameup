import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function Explore() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/8490/8490741.png' }}
          style={styles.logo}
        />
        <Text style={styles.title}>GameUp</Text>
      </View>

      {/* Jogos */}
      <ScrollView contentContainerStyle={styles.gamesContainer}>
        {[
          'https://play-lh.googleusercontent.com/8cFzQqj_8JtGej5uUJK6sSln3tUHgWrYfEHRsCft4QKYm7pFSYNgE0FJWvH0v-QAHUg=w240-h480-rw', // princesa
          'https://play-lh.googleusercontent.com/1rAoBDGmYItnBuFs6gbgS0CFbR_7rJzskxxKACFSckY8K0k-4YXmC5ccciPtNfXrA7s=w240-h480-rw', // carro
          'https://play-lh.googleusercontent.com/3NIPn0ECpbZnKlRVQbAXATb8m6NwTr3nE2spQKu9V41vYPGPO0QAFZCDdOKirGv_4z8=w240-h480-rw', // bubble
          'https://play-lh.googleusercontent.com/qyN9TtS8w7FS_nYoLOhZP8p6TK3nCPgP0L8O6N3HRy2CRK60kLlxMgiqUj6EPUKebA=w240-h480-rw', // fogo e agua
          'https://play-lh.googleusercontent.com/g4xCjSMr5FwJbE2dO5zkllINBQLRko_YLw14UbbyO6ulYf07n7k2cnFQyT9A4DiG7Q=w240-h480-rw', // jogo 4
          'https://play-lh.googleusercontent.com/NrUBZeJ1oPKCKfVzK3c9Iec4vZTJt8rMwrHK88iSfhtYQ2E0DjA2UbUCSmi1eZBT5A=w240-h480-rw', // temple run
        ].map((url, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Image source={{ uri: url }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.replace('/')}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }}
            style={styles.homeIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4B0082' },
  header: {
    backgroundColor: '#FFD700',
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: 40, height: 40, marginRight: 10 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#4B0082' },
  gamesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
    padding: 20,
  },
  card: {
    backgroundColor: '#FFD700',
    padding: 5,
    borderRadius: 10,
  },
  image: { width: 100, height: 100, borderRadius: 10 },
  footer: {
    height: 60,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeIcon: { width: 30, height: 30, tintColor: '#4B0082' },
});

