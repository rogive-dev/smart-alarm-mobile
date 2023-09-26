import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button, Subheading } from 'react-native-paper';
import { Stack, router } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Subheading>
          La página que buscas no existe.
        </Subheading>
        <Button onPress={() => router.replace('/')}>
          Ir al inicio
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
