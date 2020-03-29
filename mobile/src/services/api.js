import axios from 'axios';

import { useSafeArea } from 'react-native-safe-area-context';

const api = axios.create({
  baseURL: 'http://192.168.1.13:3333'
});



function HookComponent() {
  const insets = useSafeArea();

  return <View style={{ paddingTop: insets.top }} />;
}

export default api;