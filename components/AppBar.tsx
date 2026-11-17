import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/stack';

const MyAppBar = ({ navigation, back }: NativeStackHeaderProps) => {

    return (
        <Appbar.Header>
            {back ? (
                <Appbar.BackAction onPress={() => navigation.goBack()} />

            ) : (
                <Appbar.Action
                icon="arrow-right"
                onPress={() => navigation.navigate('Second')}
                />
            )}
            <Appbar.Content title="Mun sovellus" />
        </Appbar.Header>
    );
};
export default MyAppBar;