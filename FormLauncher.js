import {View, Button} from 'react-native';

const FormLauncher = (props) => {
    return (
        <View>
            <Button title={props.title} disabled={props.disabled} onPress={props.onPress}/>
        </View>
    )
}

export default FormLauncher