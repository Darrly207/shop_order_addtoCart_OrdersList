import { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const Toggle = () =>{
    const [isEnable, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={style.container}>
            <Switch 
            trackColor={{false: '#767577', true:'#81b0ff'}}
            thumbColor={isEnable ? '#f5dd4b':'#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnable}
            />
        </View>
    );
};
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Toggle