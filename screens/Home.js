import React, {Component} from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return(
        <View 
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <SafeAreaView style = {styles.droidAreaView}></SafeAreaView>
                    <ImageBackground style = {styles.bgImage} source = {require("../assets/space.gif")}>
                <Text style = {styles.titleText}> Stellar App </Text>
                <View style={{marginTop:100}}>
                <TouchableOpacity onPress = {()=>this.props.navigation.navigate("SpaceCrafts")} style = {styles.routeCard}> 
                    <Text style =  {styles.routeText}>SpaceCrafts</Text>
                    <Image style = {styles.iconImage} source = {require("../assets/space_crafts.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=>this.props.navigation.navigate("StarMap")} style = {styles.routeCard}>
                        <Text style = {styles.routeText}>Star Map</Text>
                        <Image style = {styles.iconImage} source = {require("../assets/star_map.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=>this.props.navigation.navigate("DailyPic")} style = {styles.routeCard}>
                        <Text style = {styles.routeText}>Daily Pic</Text>
                        <Image style = {styles.iconImage} source = {require("../assets/daily_pictures.png")}/>
                </TouchableOpacity>
                </View>
                </ImageBackground>
        </View>

        )
    }
}
const styles = StyleSheet.create({
    droidAreaView: {
        marginTop: Platform.OS==="android"? StatusBar.currentHeight: 0 
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeCard: {
        flex: 0.15,
        marginLeft: 50,
        margintTop: 50,
        marginRight: 50,
        borderRadius: 30,
        backgroundColor: "white",
        borderWidth: 2
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 50,
        paddingLeft: 15
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    iconImage: {
        position: "absolute",
        height: 80,
        width: 80,
        resizeMode: "contain",
        right: 20,
        top: -8
    },
})