import { Stack } from 'expo-router';
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper';

import store from '../store';
import theme from '../constants/Theme';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="explanation" options={{ headerShown: false }} />
          <Stack.Screen name="create" options={{ headerShown: false }} />
          <Stack.Screen name="map" options={{ headerShown: false }} />
          <Stack.Screen name="alternatives" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </ReduxProvider>
  );
}
