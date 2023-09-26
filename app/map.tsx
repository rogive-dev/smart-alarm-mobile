import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Appbar, Button, TextInput, } from 'react-native-paper';
import { router } from 'expo-router';

import { updateTarget } from '../store/alarm-slice';

export default function Map() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleContinue = () => {
    const target = text || 'Universidad de los Andes';
    dispatch(updateTarget(target));
    router.replace('/create');
  }

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.replace("/create")} />
        <Appbar.Content title="Escoge tu destino" />
      </Appbar.Header>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("../assets/images/map.png")}
        />
        <View style={styles.search}>
          <TextInput
            mode="outlined" outlineColor="#e7e7e7"
            placeholder="Buscar..."
            value={text} style={styles.input}
            onChangeText={(value) => setText(value)}
            right={<TextInput.Icon name="magnify" color="#808080" />}
          />
        </View>
        <View style={styles.actions}>
          <Button
            mode="contained"
            onPress={() => handleContinue()}>
            Confirmar destino
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  search: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 15,
    top: 10,
  },
  input: {
    flex: 1,
  },
  actions: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    bottom: 15,
  },
});
