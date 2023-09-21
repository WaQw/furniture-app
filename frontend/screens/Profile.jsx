import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './profile.style'
import { StatusBar } from 'expo-status-bar'
import { COLORS, SIZES} from "../constants"
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'

const Profile = ({navigation}) => {

    const [userData, setUserData] = useState(null)
    const [userLogin, setUserLogin] = useState(true)

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
                        {userLogin === true ? "Angela" : "Please login into your account"}
                    </Text>
                    {userLogin === false ? (
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <View style={styles.loginBtn}>
                                <Text style={styles.menuText}>L O G I N    </Text>
                            </View>
                        </TouchableOpacity>
                    ) : (<View style={styles.loginBtn}>
                            <Text style={styles.menuText}>angela@outlook.com    </Text>
                        </View>
                    ) }
                    {userLogin === false ? (
                        <View></View>
                    ) : (
                        <View style={styles.menuWrapper}>
                            <TouchableOpacity onPress={() => {}}>
                                <View style={styles.menuItem(0.2)}>
                                    <MaterialCommunityIcons 
                                        name="heart-outline" 
                                        size={24} 
                                        color={COLORS.primary}
                                    />
                                    <Text style={styles.menuText}>Favorites</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {}}>
                                <View style={styles.menuItem(0.2)}>
                                    <MaterialCommunityIcons 
                                        name="truck-delivery-outline" 
                                        size={24} 
                                        color={COLORS.primary}
                                    />
                                    <Text style={styles.menuText}>Orders</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {}}>
                                <View style={styles.menuItem(0.2)}>
                                    <SimpleLineIcons 
                                        name="bag" 
                                        size={24} 
                                        color={COLORS.primary}
                                    />
                                    <Text style={styles.menuText}>Cart</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {}}>
                                <View style={styles.menuItem(0.2)}>
                                    <MaterialCommunityIcons 
                                        name="cached" 
                                        size={24} 
                                        color={COLORS.primary}
                                    />
                                    <Text style={styles.menuText}>Clear Cache</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {}}>
                                <View style={styles.menuItem(0.2)}>
                                    <AntDesign 
                                        name="deleteuser" 
                                        size={24} 
                                        color={COLORS.primary}
                                    />
                                    <Text style={styles.menuText}>Delete Account</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {}}>
                                <View style={styles.menuItem(0.2)}>
                                    <AntDesign 
                                        name="logout" 
                                        size={24} 
                                        color={COLORS.primary}
                                    />
                                    <Text style={styles.menuText}>Logout</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) }
                </View>
            </View>
        </View>
    )
}

export default Profile