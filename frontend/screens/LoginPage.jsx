import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './login.style'
import BackBtn from '../components/BackBtn'

const LoginPage = ({navigation}) => {

    const [loader, setLoader] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState({});
    const [input, setInput] = useState({email: '', password: ''})

    return (
        <ScrollView>
            <SafeAreaView style={{marginHorizontal: 20}}>
                <View>
                    <BackBtn onPress={() => navigation.navigate('Profile')}/>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default LoginPage