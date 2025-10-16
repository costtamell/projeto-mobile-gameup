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

      {/* Área de Jogos */}
      <ScrollView contentContainerStyle={styles.gamesContainer}>
        {/* 1️⃣ Leva para index.tsx */}
        <TouchableOpacity style={styles.card} onPress={() => router.push({ pathname: '/outromel' })}>
          <Image
            source={{ uri: 'https://play-lh.googleusercontent.com/-5c4MsyKhGqLwJE3gRa3rVaD_f7CaGRTX_UewxDdIhKFQVhGa_4cH1fJqJSl__bDBw' }}
            style={styles.image}
          />
        </TouchableOpacity>

        {/* 2️⃣ Leva para mimi.tsx */}
        <TouchableOpacity style={styles.card} onPress={() => router.push({ pathname: '/mimi' })}>
          <Image
            source={{ uri: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/b5c8b617f65be7cc4d56dd3657590ae7/temple-run-2.png' }}
            style={styles.image}
          />
        </TouchableOpacity>

        {/* 3️⃣ Leva para mel.tsx */}
        <TouchableOpacity style={styles.card} onPress={() => router.push({ pathname: '/mel' })}>
          <Image
            source={{ uri: 'https://tcf.admeen.org/category/3000/2944/400x400/fire-and-water.jpg' }}
            style={styles.image}
          />
        </TouchableOpacity>

        {/* 4️⃣ e 5️⃣ — continuam só visuais */}
        <TouchableOpacity style={styles.card} onPress={() => router.push('/outromimi' as any)}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWxFerIHIlN9hxKbCKi07SyRe-o2nAzTmI0ghTujHG0x8vDhresBMuBq64-XF9q5kguZgUFyLC3u3dmLkBdAwH18Go-EPfINdLS0Vbku-wg',
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      </ScrollView>

      {/* Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.replace({ pathname: '/' })}>
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
