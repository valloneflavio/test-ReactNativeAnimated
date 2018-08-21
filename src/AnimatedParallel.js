'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Easing,
    Animated,
    ScrollView
} from 'react-native';

import { Button } from '../components';

export default class AnimatedParallel extends Component {

    constructor() {
        super()
        this.animatedValue1 = new Animated.Value(0)
        this.animatedValue2 = new Animated.Value(0)
        this.animatedValue3 = new Animated.Value(0)
    }

    componentDidMount() {
        this.animate()
    }

    // animate function that call Animated.parallel
    animate() {
        this.animatedValue1.setValue(0)
        this.animatedValue2.setValue(0)
        this.animatedValue3.setValue(0)

        const createAnimation = function (value, duration, easing, delay = 0) {
            return Animated.timing(
                value,
                {
                    toValue: 1,
                    duration,
                    easing,
                    delay
                }
            )
        }

        // call animated.parallel to start animatedValues animation
        Animated.parallel([
            createAnimation(this.animatedValue1, 2000, Easing.ease),
            createAnimation(this.animatedValue2, 1000, Easing.ease, 1000),
            createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)
        ]).start()
    }

    render() {

        // we interpolate our values to be output as a range from 0.5 to 2, 
        // we will use this value to scale our text from .5 to 2.
        const scaleText = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 2]
        })

        // we interpolate our values to be output as a range of 0 degrees to 720 degrees,
        //  essentially spinning the item two times.        
        const spinText = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg']
        })

        //  we interpolate out values to be output as a range of - 100 to 400, 
        // and will use this as a margin property in our View.        
        const introButton = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 400]
        })        

        return (
            <View style={[styles.container]}>
                <Animated.View style={{ transform: [{ scale: scaleText }] }}>
                    <Text>Welcome</Text>
                </Animated.View>
                <Animated.View style={{ marginTop: 20, transform: [{ rotate: spinText }] }}>
                    <Text style={{ fontSize: 20 }}>
                        to the App!
                    </Text>
                </Animated.View>
                <Animated.View style={{ top: introButton, position: 'absolute' }}>
                    <Button
                        title="Click Here To Start"
                        onPress={() => this.animate()}/>
                </Animated.View>
            </View>            
        )


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})