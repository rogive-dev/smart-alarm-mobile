import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Appbar, FAB, Menu } from 'react-native-paper';
import { router } from 'expo-router';
​
import Alarm from '../components/alarm';
​
export default function Dashboard() {
  const { alarms } = useSelector((state: any) => state.alarm);
  const [open, setOpen] = useState(false);
​
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Alarmas" />
        <Menu
          visible={open}
          onDismiss={() => setOpen(false)}
          anchor={
            <Appbar.Action
              icon="cog" color='#ffffff'
              onPress={() => setOpen(true)}
            />
          }>
          <Menu.Item title="Inicar sesión" />
        </Menu>
      </Appbar.Header>
      <ScrollView style={styles.content}>
        {alarms.map((item: any) => (
          <Alarm key={item.id} alarm={item} />
        ))}
      </ScrollView>
      <FAB
        style={styles.fab} icon="plus" 
        color='#ffffff' onPress={() => router.replace("/explanation")}
      />
    </View>
  );
}
​
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  fab: {
    position: 'absolute',
    margin: 15,
    right: 0,
    bottom: 0,
  },
});