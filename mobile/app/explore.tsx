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
          , 
          'https://play-lh.googleusercontent.com/-5c4MsyKhGqLwJE3gRa3rVaD_f7CaGRTX_UewxDdIhKFQVhGa_4cH1fJqJSl__bDBw', 
          'data:image/jpeg;base64,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', 
          'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/b5c8b617f65be7cc4d56dd3657590ae7/temple-run-2.png', 
          'https://tcf.admeen.org/category/3000/2944/400x400/fire-and-water.jpg', 
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWxFerIHIlN9hxKbCKi07SyRe-o2nAzTmI0ghTujHG0x8vDhresBMuBq64-XF9q5kguZgUFyLC3u3dmLkBdAwH18Go-EPfINdLS0Vbku-wg', // temple run
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

