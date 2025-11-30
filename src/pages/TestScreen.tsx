import { useEffect } from 'react';
import { Text } from 'react-native';

const HOST = '192.168.45.186';   // PC IP
const PORT = '9090';
const BASE_URL = `http://${HOST}:${PORT}`;

export default function TestScreen() {
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => {
        console.log('FETCH STATUS >>>', res.status);
        return res.text();
      })
      .then(t => {
        console.log('FETCH BODY >>>', t);
      })
      .catch(e => {
        console.log('FETCH ERROR >>>', e);
      });
  }, []);

  return <Text>Test</Text>;
}
