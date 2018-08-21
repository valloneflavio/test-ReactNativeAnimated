/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Easing,
    Button,
} from 'react-native';
/**
 * Animated is the library we will be using to create the animations, and ships with React Native.
 * 
 * Image is needed so we can create an image in our UI.
 * 
 * Easing is a module that also ships with React Native. It allows us to use various predefined easing methods such as linear, 
 * ease, quad, cubic, sin, elastic, bounce, back, bezier, in, out, inout, and others.
 * 
 */


export default class AnimatedSpin extends React.Component {
    constructor() {
        super()
        this.spinValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.spin();
    }

    spin = () => {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }

    render() {
        /**
         * interpolate() is a method that is available to be called on any Animated.Value. 
         * interpolate is a method that interpolates the value before updating the property, e.g. mapping 0–1 to 0–10
         * So in our example, we need to map 0 (zero) degrees to 360 degrees numerically
         */
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        return (
            <View style={s.container}>  
                    <Animated.Image
                        style={{
                            width: 227,
                            height: 200,
                            transform: [{ rotate: spin }]
                        }}
                        source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }
                        }
                    /> 
            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    containerBtn: {
        flex: 1,
        height: 30,
    },
    button: {
        height: 60,
        backgroundColor: '#ededed',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        flex: 1,
    },
    block: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    }
});
