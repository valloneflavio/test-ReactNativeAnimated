'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
} from 'react-native';

import { Button } from '../components';

export default class AnimatedTiming extends React.Component {

    constructor() {
        super()
        this.springValue = new Animated.Value(0.3)
    }

    // call animated spring function
    // We call Animated.spring, passing in two arguments: a value to animate and a config object    
    spring = () => {
        this.springValue.setValue(0.3)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1
            }
        ).start()
    }

    render() {

        

        return (
            <View style={styles.container}>
                <Button
                    title='Spring'
                    onPress={this.spring} />

                <View style={styles.animatedContainer}>
                    <Animated.Image
                        style={{ width: 227, height: 200, marginTop: 50, transform: [{ scale: this.springValue }] }}
                        source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
                    />
                </View>

            </View>            
        )


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,      
    },
    animatedContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
