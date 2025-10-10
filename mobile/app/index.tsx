import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/explore')}
      >
        <Text style={styles.buttonText}>Ir para Explore</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
  button: {
    backgroundColor: '#6200ee',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontSize: 16 },
});
