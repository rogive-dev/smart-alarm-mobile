import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

import Theme from '../constants/Theme';

export default function TargetSelector() {
  const { target } = useSelector((state: any) => state.alarm);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          size={24} color={Theme.colors.primary}
          name="checkbox-blank-circle-outline"
        />
        <TextInput
          mode="outlined" outlineColor='#e7e7e7' 
          value={'Casa'} editable={false} style={styles.input}
          right={<TextInput.Icon name="map-marker" color="#808080" />}
        />
        <View style={styles.line} />
      </View>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          size={24} color={Theme.colors.primary}
          name="checkbox-blank-circle-outline"
        />
        <TextInput
          mode="outlined" outlineColor="#e7e7e7"
          placeholder="¿A dónde quieres ir?"
          value={target} editable={false} style={styles.input}
          right={
            <TextInput.Icon
              name="map-marker"
              color="#808080" onPress={() => router.replace('/map')}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  inputContainer: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  line: {
    width: 2,
    height: 58,
    backgroundColor: Theme.colors.primary,
    position: 'absolute',
    top: 40,
    left: 11,
  },
  input: {
    flex: 1
  }
});
