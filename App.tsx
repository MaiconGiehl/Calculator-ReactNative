import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [text, onChangeText] = useState('');
  const [result, onChangeResult] = useState(0);

  return (
    <View>
      <Header />

      <View style={styles.container}>
        <Input text={text} onChangeText={onChangeText} />
        <Button title='Calcular' onPress={() => {
          Calcular({ text, onChangeResult });
        }} />

        <Text style={styles.textResult}>
          Resultado:

          <Text style={{ paddingLeft: 8, fontWeight: '700' }}>{result}</Text>
        </Text>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}
function Header() {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.headerText}>App Matemática</Text>
    </View>
  );
}
function Input({ text, onChangeText }) {
  return (
    <View style={{ width: '100%' }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={'Informe seu cálculo'}
      />
    </View>
  )
}

function Calcular({ text, onChangeResult }) {
  let valores: string[];

  let resultado: number;

  if (text.indexOf('+') != -1) {
    valores = text.split('+');
    resultado = Number(valores[0]) + Number(valores[1]);
  } else if (text.indexOf('-') != -1) {
    valores = text.split('-');
    resultado = Number(valores[0]) - Number(valores[1]);
  } else if (text.indexOf('*') != -1) {
    valores = text.split('*');
    resultado = Number(valores[0]) * Number(valores[1]);
  } else {
    valores = text.split('/');
    resultado = Number(valores[0]) / Number(valores[1]);
  }

  if (resultado) {
    onChangeResult(resultado);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBox: {
    height: 60,
    backgroundColor: '#4867D7',
  },
  headerText: {
    padding: 15,
    fontSize: 20,
    color: '#fff'
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1
  },
  textResult: {
    paddingTop: 40,
    fontSize: 20
  }
});