import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function Explore() {
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/8490/8490741.png' }}
          style={styles.logo}
        />
        <Text style={styles.title}>GameUp</Text>
      </View>

      
      <ScrollView contentContainerStyle={styles.gamesContainer}>
        
        <TouchableOpacity style={styles.card} onPress={() => router.push('/outromel')}>
          <Image
            source={{ uri: 'https://play-lh.googleusercontent.com/-5c4MsyKhGqLwJE3gRa3rVaD_f7CaGRTX_UewxDdIhKFQVhGa_4cH1fJqJSl__bDBw' }}
            style={styles.image}
          />
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.card} onPress={() => router.push('/mimi')}>
          <Image
            source={{ uri: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/b5c8b617f65be7cc4d56dd3657590ae7/temple-run-2.png' }}
            style={styles.image}
          />
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.card} onPress={() => router.push('/mel')}>
          <Image
            source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT85UnlldTqUNrDM1khUkD3TfYdH9vrwhf7rd9Qh2gOMT5V0vz86jARNszoJM9gSUNhrmMwlvkRBQxU6TEJvUxyIuQtETAVBK-kltusFCZc' }}
            style={styles.image}
          />
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.card} onPress={() => router.push('/outromimi')}>
          <Image
            source={{
              uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSdYtGjsTezm3dvQEf5nLt_MvTJb9tzQF1PMTQ1sdBg-slGMcv3rFYdhpDwBWwCQY6oHoB9Ux5ULO4J-OFuvGYHcXTGv1LFIESLVilqCEd',
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      </ScrollView>

      
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
