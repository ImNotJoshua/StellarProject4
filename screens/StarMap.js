import React, {Component} from 'react';
import { Text, View, TextInput, StyleSheet, Platform } from 'react-native';
import {WebView} from 'react-native-webview';
import axios from 'axios';

export default class StarMapScreen extends Component {
    constructor() {
        super()
        this.state={
            latitude:'',
            longitude:'',
        }
    }
    render() {
        const {longitude, latitude}=this.state;
        const path='https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'

        return(
        <View 
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <SafeAreaView style = {styles.droidAreaView}></SafeAreaView>
                    <ImageBackground style = {styles.bgImage} source = {require("../assets/space.gif")}></ImageBackground>
                <View>
                    <Text>
                        Star Map
                    </Text>
                    <TextInput
                    style={{height:40, borderColor: 'gray', borderWidth: 1}}
                    placeHolder="Enter your latitude"
                    placeHolderText="#ffff#000000"
                    onChangeText={(text)=>{
                        this.setState({
                            latitude: text
                        })
                    }}
                    />
                    <TextInput
                    style={{height:40, borderColor: 'gray', borderWidth: 1}}
                    placeHolder="Enter your Longitude"
                    placeHolderText="#ffff#000000"
                    onChangeText={(text)=>{
                        this.setState({
                            longitude: text
                        })
                    }}
                    />
                </View>
            <WebView
                scalesPageToFit={true}
                source={{uri:path}}
                style={{marginTop:20, marginBottom:20,}}
            />
        </View>

        )
    }

}
const styles=StyleSheet.create({
    droidAreaView: {
        marginTop: Platform.OS==="android"? StatusBar.currentHeight: 0 
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover'
    },
})