import { StyleSheet, View } from 'react-native';
import { Card, Switch, Text, Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import Theme from '../constants/Theme';
import { toggleAlarm } from '../store/alarm-slice';

const DAYS_OF_WEEK = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

export default function Alarm(props: any) {
  const { alarm, ...others } = props;
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleAlarm(alarm.id));
  };

  return (
    <Card {...others} style={styles.card}>
      <Card.Title
        title={alarm.name}
        right={(props) => (
          <Switch 
            {...props}
            value={alarm.active} style={styles.switch}
            onValueChange={() => handleToggle()}
          />
        )}
      />
      <Card.Content>
        <View style={styles.timeContainer}>
          <Title style={styles.timeText}>
            {alarm.hour}:{alarm.minute}
          </Title>
          <Title>
            {alarm.noon}
          </Title>
        </View>
        {alarm.type === 'smart' && (
          <Text>
            Hora de llegada: 9:00 A.M.
          </Text>
        )}
        <View style={styles.daysContainer}>
          {DAYS_OF_WEEK.map((day) => {
            const applied = [];
            if (alarm.daysOfWeek.includes(day)) applied.push(styles.selected);
            return (
              <Text key={day} style={applied}>
                {day}
              </Text>
            );
          })}
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },
  switch: {
    marginRight: 10,
  },
  timeContainer: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  timeText: {
    fontSize: 30,
  },
  daysContainer: {
    gap: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selected: {
    color: Theme.colors.primary,
  },
});
