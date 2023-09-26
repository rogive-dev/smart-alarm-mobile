import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Appbar, Button, Text, TextInput } from 'react-native-paper';
import { router } from 'expo-router';

import { updateName } from '../store/alarm-slice';
import TimeSelector from '../components/time-selector';
import DaysSelector from '../components/days-selector';
import TargetSelector from '../components/target-selector';

export default function Create() {
  const dispatch = useDispatch();
  const { name, daysOfWeek, target } = useSelector((state: any) => state.alarm);

  const handleNameChange = (value: string) => {
    dispatch(updateName(value));
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.replace("/")} />
        <Appbar.Content title="Crear alarma inteligente" />
      </Appbar.Header>
      <ScrollView style={styles.content}>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>
            Selecciona la hora a la que deseas llegar a tu destino:
          </Text>
          <TimeSelector />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>
            Introduce un nombre para tu alarma:
          </Text>
          <TextInput
            mode="outlined" outlineColor='#e7e7e7'
            placeholder="Escribe un nombre..."
            value={name} onChangeText={handleNameChange}
          />
        </View>
        <View style={styles.itemContainer}>
          <DaysSelector />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>
            Escoge tu lugar de destino:
          </Text>
          <TargetSelector />
        </View>
      </ScrollView>
      <View style={styles.actions}>
        <Button
          mode="contained"
          onPress={() => router.replace("/alternatives")}
          disabled={!name || !daysOfWeek?.length || !target}>
          Continuar
        </Button>
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
    padding: 15,
  },
  text: {
    textAlign: 'justify',
  },
  itemContainer: {
    gap: 10,
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'flex-end',
  },
});
