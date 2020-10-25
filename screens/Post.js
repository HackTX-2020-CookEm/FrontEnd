import React, { Component, useState, useEffect } from 'react';
import { Image, Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';


const DATA = [
    {
        user_name:'Jasmine Lu',
        user_image:'https://i.pinimg.com/736x/fc/45/6a/fc456aba424730185b1496c75c99c7d2.jpg',
        feed_image:'https://www.chasinglenscapes.com/wp-content/uploads/2020/06/food-photography-on-the-go-tips.jpg',
        user_comment:'Check out this amazing dinner I had last night. Absolutely loved it!',
        user_likes:'130',
        user_chat:'3',
    },
]

export default function Post() {

    const [user_image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
        setImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>Post</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.picturePicker}>
                    <Button title="Pick an image from camera roll" onPress={pickImage} />
                    {user_image && <Image source={{ uri: user_image }} style={{ width: 200, height: 200 }} />}
                </View>
                <View style={styles.inputField}>
                    <Input
                        placeholder='Caption...'
                    />
                </View>
                <View style={styles.postButCont}>
                    <TouchableOpacity style={styles.postContent} onPress={()=> alert('')}>
                        <Text style={styles.postText}>Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFDFF',
    },
    logo: {
        fontWeight:"bold",
        fontSize:35,
        color:"black",
        marginBottom:20,
        marginTop:70,
        marginLeft:20,
    },
    picturePicker: {
        flex: 1, 
        alignItems: 'center', 
        marginTop:50,
    },
    content:{
        flex: 1,
    },
    inputView:{
        width:"80%",
        backgroundColor:"#F4F5F5",
        borderRadius:10,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"black",
    },
    inputField:{
        marginBottom:50,
    },
    postButCont: {
        justifyContent:'center',
        alignItems:'center',
    },
    postContent:{
        width:"60%",
        backgroundColor:"#BF5700",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:150
    },
    postText:{
        fontSize:15,
        color:'white',
    },
});