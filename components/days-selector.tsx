import { Pressable, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native-paper';

import Theme from '../constants/Theme';
import { toggleDay } from '../store/alarm-slice';

const DAYS_OF_WEEK = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

export default function DaysSelector() {
  const dispatch = useDispatch();
  const { daysOfWeek } = useSelector((state: any) => state.alarm);

  const handleToggle = (item: string) => {
    dispatch(toggleDay(item))
  }

  return (
    <View style={styles.container}>
      {DAYS_OF_WEEK.map((item) => {
        const applied: any[] = [styles.dayText]
        if (daysOfWeek.includes(item)) applied.push(styles.selected);
        return (
          <Pressable
            key={item} style={styles.dayContainer}
            onPress={() => handleToggle(item)}>
            <Text style={applied}>
              {item}
            </Text>
          </Pressable>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    backgroundColor: '#e6e6e6',
    width: 40,
    maxWidth: 40,
    height: 40,
    maxHeight: 40,
  },
  dayText: {
    fontSize: 20,
  },
  selected: {
    fontWeight: '500',
    color: Theme.colors.primary,
  },
});
