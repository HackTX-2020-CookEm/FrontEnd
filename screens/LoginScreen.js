import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { AuthContext } from '../components/context';

const LoginScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })

    const { signIn } = React.useContext(AuthContext);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>BevoEats</Text>
            <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    placeholder="Email..." 
                    placeholderTextColor="black"
                    onChangeText={text => setEmail(text)}/>
            </View>
            <View style={styles.inputView} >
                <TextInput  
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..." 
                    placeholderTextColor="black"
                    onChangeText={text => setPassword(text)}/>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Forgot')}>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={()=> {signIn()}}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>Signup</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFDFF',
        alignItems: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#BF5700",
        marginBottom:40,
        marginTop:190,
    },
    inputView:{
        width:"80%",
        backgroundColor:"#F4F5F5",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"black"
    },
    forgot:{
        color:"black",
        fontSize:11
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#BF5700",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText:{
        color:"white"
    },
    signUpText:{
        color:"black"
    }
});