import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Paragraph, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Theme from '../constants/Theme';

export default function Alternative(props: any) {
  const { alternative, selected = false, onPress, ...others } = props;

  const applied: any[] = [styles.card];
  if (selected) applied.push(styles.selected);

  return (
    <Card {...others} style={applied} onPress={onPress}>
      <Card.Content>
        <View style={styles.container}>
          <Avatar.Icon
            style={styles.avatar}
            size={50} icon={alternative.icon}
          />
          <View style={styles.content}>
            <Title>
              {alternative.name}
            </Title>
            <Paragraph>
              Aprox. {alternative.estimated} min
            </Paragraph>
            <Paragraph>
              Hora de salida: {alternative.hour}:{alternative.minute} {alternative.noon}
            </Paragraph>
          </View>
          {selected ? (
            <MaterialCommunityIcons
              size={24} color={Theme.colors.primary}
              name="check-circle"
            />
          ) : (
            <MaterialCommunityIcons
              size={24} color="#e6e6e6"
              name="check-circle-outline"
            />
          )}
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },
  container: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  avatar: {
    backgroundColor: '#e6e6e6',
  },
  selected: {
    backgroundColor: "#e0e7ff",
    borderWidth: 1,
    borderColor: Theme.colors.primary,
  },
});
