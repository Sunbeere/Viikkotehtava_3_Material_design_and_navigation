
import { View, Text, StyleSheet } from 'react-native';

const SecondScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Second Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
export default SecondScreen;
