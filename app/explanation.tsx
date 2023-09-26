import { StyleSheet, View } from 'react-native';
import { Appbar, Avatar, Button, Text } from 'react-native-paper';
import { router } from 'expo-router';

export default function Explanation() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Crear alarma inteligente" />
      </Appbar.Header>
      <View style={styles.content}>
        <Avatar.Icon
          style={styles.avatar}
          size={50} icon="alarm"
        />
        <Text style={styles.text}>
          Esta alarma te permite configurar una hora objetivo para llegar a tiempo
          a tu lugar de destino. Te mostraremos sugerencias sobre cuál es el mejor
          medio de transporte basado en las condiciones actuales de tráfico y clima.
        </Text>
      </View>
      <View style={styles.actions}>
        <Button onPress={() => router.replace("/")}>
          Cancelar
        </Button>
        <Button
          mode="contained"
          onPress={() => router.replace("/create")}>
          Continuar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 15,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: '#e6e6e6',
    marginBottom: 10,
  },
  text: {
    textAlign: 'justify'
  },
  actions: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'flex-end',
    gap: 2,
  },
});
