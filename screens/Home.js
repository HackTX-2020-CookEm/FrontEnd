import React, { Component } from 'react'; 
import { Image, StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';

const DATA = [
    {
        user_name:'Jasmine Lu',
        user_image:'https://i.pinimg.com/736x/fc/45/6a/fc456aba424730185b1496c75c99c7d2.jpg',
        feed_image:'https://www.chasinglenscapes.com/wp-content/uploads/2020/06/food-photography-on-the-go-tips.jpg',
        user_comment:'Check out this amazing dinner I had last night. Absolutely loved it!',
    },
    {
        user_name:'Albert Cho',
        user_image:'https://www.atlanticcouncil.org/wp-content/uploads/2020/06/albert-cho-mlpfellow-2016.jpg',
        feed_image:'https://miro.medium.com/max/4000/1*yGK9jD35goWdn3XtRq9y4Q.jpeg',
        user_comment:'Tried to be artsy. Had yummy sushi this afternoon with my buddies. I would definetly recommend this place.',
    },
    {
        user_name:'Jasmine Lu',
        user_image:'https://i.pinimg.com/736x/fc/45/6a/fc456aba424730185b1496c75c99c7d2.jpg',
        feed_image:'https://www.chasinglenscapes.com/wp-content/uploads/2020/06/food-photography-on-the-go-tips.jpg',
        user_comment:'Check out this amazing dinner I had last night. Absolutely loved it!',
    },
]

function Item({ user_name, user_image, feed_image, user_comment }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={styles.headerLeft}>
                    <Image
                        style={styles.userImage} 
                        source={{
                            uri: user_image,
                        }}
                    />
                    <Text style={styles.userName}>{ user_name }</Text>
                </View>
                <View style={styles.headerRight}>
                </View>
            </View>
            <Image
                style={styles.feedImage} 
                source={{
                    uri: feed_image,
                }}
            />
            <View style={styles.cardFooter}>
                <View style={styles.footerLeft}>
                    <View style={{flexDirection:'row'}}>

                    </View>
                </View>
                <View style={styles.discription}>
                    <Text>
                        { user_comment }
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default function Home() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>Home</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} 
                    user_name={item.user_name}
                    user_image={item.user_image}
                    feed_image={item.feed_image}
                    user_comment={item.user_comment}
                />}
                keyExtractor={item => item.id}
            />            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFDFF',
    },
    logo: {
        fontWeight:'bold',
        fontSize:35,
        color:'black',
        marginBottom:20,
        marginTop:70,
        marginLeft:20,
    },
    card: {
        padding:10,
        margin:10,
        borderRadius:12,
        backgroundColor:'#F7F7F7'
    },
    cardHeader: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    headerLeft: {
        flexDirection:'row',
    },
    userImage: {
        width:50,
        height:50,
        borderRadius:50/2
    },
    userName: {
        fontWeight:'bold',
        marginLeft:10,
        marginTop:15,
    },
    feedImage: {
        height:300,
        margin:10,
        borderRadius:10,
        marginVertical:10,
    },
    cardFooter: {
        flexDirection:'row',
    },
    discription: {
        margin:10,
    }
});