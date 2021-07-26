import React, {Component} from 'react';
import { Alert, ImageBackground, Linking, Text, View } from 'react-native';
import axios from 'axios';
import { BorderlessButton } from 'react-native-gesture-handler';

export default class DailyPicScreen extends Component {
    constructor(props) {
        super(props)
        this.state={apod:[]}
    }
    componentDidMount(){
        this.getApod()
    }
    getapod=()=>{
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=235QKlonl9q6fkIJWoQu1P2ujkJQOaKdoBZ9ETHc')
        .then(respone => {
            this.setState({apod:response.data})

        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }
    renderImage() {

    }
    render() {
        const url=this.state.apod.url
        if(Object.keys(this.state.apod).length===0){
            return(
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text>
                        Loading
                    </Text>
                </View>
            )
        }
        return(
        <View 
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <SafeAreaView style={styles.droidAreaView}/>
                <ImageBackground
                source={require('../assets/star-background.jpg')} style={styles.bgImage}>
                    <Text style={styles.routeText}>Astronomy Picture Of The Day</Text>
                    <Text style={styles.titleText}>{this.state.apod.title}</Text>
                    <TouchableOpacity style={styles.ListContainer}
                    onPress={() =>Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't Load This Page",err))}>
                        <View style={styles.iconContainer}>
                            <Image source={require("../assets/play-video.png")} style={{width:50, height:50}}>                          </Image>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>

                </ImageBackground>
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
    routeText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'purple',
        textAlign: 'center'
    },
    ListContainer: {
        backgroundColor: 'rgba(52,52,52,0.5)',
        flex: 0.8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})