import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const MyAppBar = ({ navigation, back }: NativeStackHeaderProps) => {

    return (
        <Appbar.Header>
            {back ? (
                <Appbar.BackAction onPress={() => navigation.goBack()} />

            ) : null}
          
            <Appbar.Content title="Mun sovellus" />

              {!back ? (
                <Appbar.Action
                icon="arrow-right"
                onPress={() => navigation.navigate('Second')}
                />
            ) : null}
        </Appbar.Header>
    );
};
export default MyAppBar;