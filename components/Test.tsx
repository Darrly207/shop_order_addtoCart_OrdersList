import { StyleSheet, View } from "react-native";
const style = StyleSheet.create({
    box: {backgroundColor: 'red', width: 200, height: 100},
    boxBlue: {backgroundColor: 'blue', width: 200, height: 100}
})
export default function App2(){
    return (
        <View style={[style.box, style.boxBlue]} />
    )
}