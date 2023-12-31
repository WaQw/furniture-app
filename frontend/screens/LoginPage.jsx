import { ScrollView, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './login.style'
import { BackBtn, Button } from '../components'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS } from '../constants'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
    email: Yup.string().email('Provide a valid email address').required('Required'),
})

const LoginPage = ({navigation}) => {

    const [loader, setLoader] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [obsecureText, setObsecureText] = useState(false);

    const inValidForm = () => {
        Alert.alert(
            "Invalid Form",
            "Please provide all required fields",
            [
                {text: "Cancel", onPress: () => console.log()},
                {text: "Continue", onPress: () => console.log()},
                {defaultIndex: 1}
            ]
        )
    }

    const login = async(values) => {
        setLoader(true);
        try {
            const endpoint = "http://localhost:3000/api/login";
            const data = values;

            const response = await axios.post(endpoint, data);
            if(response.status === 200) {
                setResponseData(response.data);

                await AsyncStorage.setItem("id", JSON.stringify(responseData._id));
                await AsyncStorage.setItem("token", JSON.stringify(responseData.token));
                await AsyncStorage.setItem(`user${responseData._id}`, JSON.stringify(responseData));

                setLoader(false);
                navigation.replace('Bottom Navigation');

            } 
        } catch (error) {
            console.log(error)
        } 
    };

    return (
        <ScrollView>
            <SafeAreaView style={{marginHorizontal: 20}}>
                <View>
                    <BackBtn onPress={() => navigation.navigate('Profile')}/>
                    <Image 
                        source={require('../assets/images/bk.png')} 
                        style={styles.cover}
                    />

                    <Text style={styles.title}>
                        Unlimited Luxurious Furniture
                    </Text>

                    <Formik
                        initialValues={{email: '', password: ''}}
                        validationSchema={validationSchema}
                        onSubmit={(values) => login(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, setFieldTouched, touched }) => (
                            <View>
                                <View sytle={styles.wrapper}>
                                    <Text style={styles.lable}>Email</Text>
                                    <View style={styles.inputWrapper(touched.email ? COLORS.secondary: COLORS.offwhite)}>
                                        <MaterialCommunityIcons 
                                            name='email-outline' 
                                            size={20}
                                            color={COLORS.gray}
                                            style={styles.iconStyle}
                                        />
                                        <TextInput
                                            placeholder='Enter email'
                                            onFocus={() => {setFieldTouched('email')}}
                                            onBlur={() => {setFieldTouched('email','')}}
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            style={{flex: 1}}
                                        />
                                    </View>
                                    {touched.email && errors.email && (
                                        <Text style={styles.errorMessage}>{errors.email}</Text>
                                    )}
                                </View>

                                <View sytle={styles.wrapper}>
                                    <Text style={styles.lable}>Password</Text>
                                    <View style={styles.inputWrapper(touched.password ? COLORS.secondary: COLORS.offwhite)}>
                                        <MaterialCommunityIcons 
                                            name='lock-outline' 
                                            size={20}
                                            color={COLORS.gray}
                                            style={styles.iconStyle}
                                        />
                                        <TextInput
                                            secureTextEntry={obsecureText}
                                            placeholder='Enter password'
                                            onFocus={() => {setFieldTouched('password')}}
                                            onBlur={() => {setFieldTouched('password','')}}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            style={{flex: 1}}
                                        />
                                        <TouchableOpacity onPress={() => {setObsecureText(!obsecureText)}}>
                                            <MaterialCommunityIcons 
                                                name={obsecureText ? 'eye-outline' : 'eye-off-outline'}
                                                size={18}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    {touched.password && errors.password && (
                                        <Text style={styles.errorMessage}>{errors.password}</Text>
                                    )}
                                </View>

                                <Button loader={loader} title={"L O G I N"} onPress={isValid ? handleSubmit: inValidForm} isValid={isValid} />

                                <Text style={styles.registration} onPress={() => navigation.navigate('SignUp')}>Register</Text>
                            </View>
                        )}
                    </Formik>

                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default LoginPage