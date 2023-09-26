import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Appbar, Button } from 'react-native-paper';
import { router } from 'expo-router';

import { selectAlternative, addAlarm } from '../store/alarm-slice';
import Alternative from '../components/alternative';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { alternative, alternatives } = useSelector((state: any) => state.alarm);

  const handleSelection = (item: any) => {
    dispatch(selectAlternative(item.id));
  };

  const handleCreate = () => {
    dispatch(addAlarm())
    router.replace("/");
  };
  
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.replace("/create")} />
        <Appbar.Content title="Crear alarma inteligente" />
      </Appbar.Header>
      <ScrollView style={styles.content}>
        {alternatives.map((item: any) => (
          <Alternative 
            key={item.id}
            alternative={item} selected={alternative === item.id}
            onPress={() => handleSelection(item)}
          />
        ))}
      </ScrollView>
      <View style={styles.actions}>
        <Button
          mode="contained" disabled={!alternative}
          onPress={() => handleCreate()}>
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
  actions: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'flex-end',
  },
});
