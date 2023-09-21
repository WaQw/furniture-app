import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './profile.style'
import { StatusBar } from 'expo-status-bar'
import { COLORS, SIZES} from "../constants"

const Profile = () => {

    const [userData, setUserData] = useState(null)
    const [userLogin, setUserLogin] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.gray}/>
                <View style={{width: '100%'}}>
                    <Image 
                        source={require('../assets/images/space.jpg')}
                        style={styles.cover}
                    />
                </View>
                <View style={styles.profileContainer}>
                    <Image 
                        source={require('../assets/images/profile.jpeg')}
                        style={styles.profile}
                    />
                    <Text style={styles.name}>
                        {userLogin === true ? userData.name : "Please login into your account"}
                    </Text>
                    {userLogin === false ? (
                        <TouchableOpacity>
                            <View style={styles.loginBtn}>
                                <Text style={styles.menuText}>L O G I N    </Text>
                            </View>
                        </TouchableOpacity>
                    ) : (<View style={styles.loginBtn}>
                            <Text style={styles.menuText}>angela@outlook.com    </Text>
                        </View>
                    ) }
                </View>
            </View>
        </View>
    )
}

export default Profile