import { useState } from "react";
import { Text, TextInput, ScrollView, View, Button } from "react-native";

// Updated function name and added type handling
const calculatorArea = (chieuDai: string, chieuRong: string) => {
  const length = parseFloat(chieuDai);
  const width = parseFloat(chieuRong);
  return isNaN(length) || isNaN(width) ? 0 : length * width;
};

const DisplayARAofRecTangle = ({ message }: { message: string }) => {
  const [chieuDai, setChieuDai] = useState('');
  const [chieuRong, setChieuRong] = useState('');
  const [result, setResult] = useState('');

  const handleCalculation = () => {
    if (chieuDai === '') {
      setResult("Please enter the length");
      return;
    }
    if (chieuRong === '') {
      setResult("Please enter the width");
      return;
    } else {
      const area = calculatorArea(chieuDai, chieuRong);
      setResult(`The area of the rectangle is: ${area} cm²`);
    }
  };

  return (
    <View>
      <Text>{message}</Text>
      <TextInput 
        placeholder="Please enter width"
        onChangeText={text => setChieuRong(text)}
        style={{ height: 40, padding: 10, borderWidth: 1, marginBottom: 10 }}
        value={chieuRong}
        keyboardType="numeric"
      />
      <TextInput 
        placeholder="Please enter length"
        onChangeText={text => setChieuDai(text)}
        style={{ height: 40, padding: 10, borderWidth: 1, marginBottom: 10 }}
        value={chieuDai}
        keyboardType="numeric"
      />
      <Button title="Calculate Area" onPress={handleCalculation} />
      <ScrollView>
        <Text style={{ fontSize: 20, color: 'black' }}>{result}</Text>
      </ScrollView>
    </View>
  );
};

export default DisplayARAofRecTangle;
