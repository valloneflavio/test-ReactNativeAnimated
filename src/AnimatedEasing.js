'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Easing,
    Animated,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import { Button } from '../components';

export default class AnimatedEasing extends React.Component {

    constructor() {
        super()
        this.animatedValue = new Animated.Value(0)
    }

    // animate function that accept animation type as param
    animate(easing) {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 1000,
                easing
            }
        ).start()
    }

    render() {
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 260]
        })
        return (
            <View style={styles.container}>
                {/* animated block */}
                <Animated.View style={[styles.block, { marginLeft }]} />
                {/* buttons container */}
                <ScrollView>
                    <Text style={styles.text}>Scroll up for more animations</Text>
                    <Button title='Bounce' onPress={this.animate.bind(this, Easing.bounce)} />
                    <Button title='Cubic' onPress={this.animate.bind(this, Easing.cubic)} />
                    <Button title='Back' onPress={this.animate.bind(this, Easing.back(2))} />
                    <Button title='Elastic' onPress={this.animate.bind(this, Easing.elastic(2))} />
                    <Button title='Ease' onPress={this.animate.bind(this, Easing.ease)} />
                    <Button title='InOut' onPress={this.animate.bind(this, Easing.inOut(Easing.quad))} />
                    <Button title='In' onPress={this.animate.bind(this, Easing.in(Easing.quad))} />
                    <Button title='Out' onPress={this.animate.bind(this, Easing.out(Easing.quad))} />
                    <Button title='Sin' onPress={this.animate.bind(this, Easing.sin)} />
                    <Button title='Linear' onPress={this.animate.bind(this, Easing.linear)} />
                    <Button title='Quad' onPress={this.animate.bind(this, Easing.quad)} />
                </ScrollView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    text: {
        textAlign: 'center',
        marginTop: 10,
    },
    block: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    }
});