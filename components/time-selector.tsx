import { StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';

import Theme from '../constants/Theme';

export default function TimeSelector() {
  return (
    <View style={styles.container}>
      <View style={styles.hourContainer}>
        <Text style={styles.hourText}>
          09
        </Text>
      </View>
      <Text style={styles.hourText}>:</Text>
      <View style={styles.hourContainer}>
        <Text style={styles.hourText}>
          00
        </Text>
      </View>
      <View style={styles.noonContainer}>
        <Text style={[styles.noonText, styles.selected]}>
          AM
        </Text>
        <Divider />
        <Text style={styles.noonText}>
          PM
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hourContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#e6e6e6',
    width: 70,
    maxWidth: 70,
    height: 70,
    maxHeight: 70,
  },
  hourText: {
    fontSize: 45,
  },
  noonContainer: {
    gap: 2,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#e6e6e6',
    width: 50,
    maxWidth: 50,
    height: 70,
    maxHeight: 70,
    marginLeft: 10,
  },
  noonText: {
    fontSize: 20,
    textAlign: 'center',
  },
  selected: {
    color: Theme.colors.primary,
  }
});
