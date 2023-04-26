import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import PostJSON from './Services/PostJSON';

export default function Form (props) {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: props.vards,
            lastName: props.uzvards,
            personasKods: '',
            dzimsanasDatums: '',
            dzivesVieta: '',
            talrunis: '',
            izglitibasLimenis: 'Vidējā',
            izglitibasIestade: '',
            specialite: '',
        }
    });

    const onSubmit = data => {
        PostJSON(data);
        setSubmitted(true);
    }

    const [isSubmitted, setSubmitted] = useState(false);

    return (
        <View style={styles.container}>
            {!isSubmitted && <>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <View style={{flexDirection: 'row', margin: 10}}>
                        <Text>Vārds </Text>
                        <TextInput style={styles.textIntputStyle}
                            placeholder="First name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        </View>
                    </>
                )}
                name="firstName"
             />

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value }}) => (
                    <>
                        <View style={{flexDirection: 'row', margin: 10}}>
                        <Text>Uzvārds </Text>
                        <TextInput
                            style={styles.textIntputStyle}
                            placeholder="Last name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        </View>
                    </>
                )}
                name="lastName"
            /> 

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value }}) => (
                    <>
                        <View style={{flexDirection: 'row', margin: 10}}>
                        <Text>personas kods </Text>
                        <TextInput
                            style={styles.textIntputStyle}
                            placeholder=""
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        </View>
                    </>
                )}
                name="personasKods"
            /> 

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value }}) => (
                    <>
                        <View style={{flexDirection: 'row', margin: 10}}>
                        <Text>Dzimšanas datums </Text>
                        <TextInput
                            style={styles.textIntputStyle}
                            placeholder=""
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        </View>
                    </>
                )}
                name="dzimsanasDatums"
            /> 

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value }}) => (
                    <>
                        <View style={{flexDirection: 'row', margin: 10}}>
                        <Text>Dzīves vieta </Text>
                        <TextInput
                            style={styles.textIntputStyle}
                            placeholder=""
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        </View>
                    </>
                )}
                name="dzivesVieta"
            /> 

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value }}) => (
                    <>
                        <View style={{flexDirection: 'row', margin: 10}}>
                        <Text>Tālrunis </Text>
                        <TextInput
                            style={styles.textIntputStyle}
                            placeholder=""
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        </View>
                    </>
                )}
                name="talrunis"
            /> 

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value }}) => (
                    <>
                        <View style={{flexDirection: 'row', margin: 10}}>
                        <Text>Izglītības līmenis </Text>
                        <TextInput
                            style={styles.textIntputStyle}
                            placeholder=""
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        </View>
                    </>
                )}
                name="izglitibasLimenis"
            /> 

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value }}) => (
                    <>
                        <View style={{flexDirection: 'row', margin: 10}}>
                        <Text>Izglītības iestāde </Text>
                        <TextInput
                            style={styles.textIntputStyle}
                            placeholder=""
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        </View>
                    </>
                )}
                name="izglitibasIestade"
            /> 

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value }}) => (
                    <>
                        <View style={{flexDirection: 'row', margin: 10}}>
                        <Text>specialitate </Text>
                        <TextInput
                            style={styles.textIntputStyle}
                            placeholder=""
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        </View>
                    </>
                )}
                name="specialite"
            /> 

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value }}) => (
                    <>
                        <View style={{flexDirection: 'row', margin: 10}}>
                        <Text>Darba pieredze </Text>
                        <TextInput
                            style={styles.textIntputStyle}
                            placeholder=""
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        </View>
                    </>
                )}
                name="darbaPieredze"
            /> 


            <Button title="Nosūtīt" onPress={handleSubmit(onSubmit)} />
            </> }
            {isSubmitted && <Text>Paldies par anketas nosūtīšanu!</Text>} 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textIntputStyle: {
        borderColor: 'black',
        borderRadius: 0,
        borderWidth: 1,
        width: 130
    }
})