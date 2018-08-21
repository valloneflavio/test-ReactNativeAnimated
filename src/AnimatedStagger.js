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


// set array for animation
const arr = []
for (var i = 0; i < 404; i++) {
    arr.push(i)
}

export default class AnimatedStagger extends Component {

    constructor () {
        super()
        this.animatedValue = []
        arr.forEach((value) => {
        this.animatedValue[value] = new Animated.Value(0)
        })
    }

    componentDidMount () {
        this.animate()
    }

    //  animated function 
    animate () {
        const animations = arr.map((item) => {
        return Animated.timing(
            this.animatedValue[item],
            {
            toValue: 1,
            duration: 4000
            }
        )
        })

        // start Animation.stagger with delay and animations as params
        Animated.stagger(10, animations).start()
    }



    render() {
        const animations = arr.map((a, i) => {
            return ( 
                <Animated.View 
                    key={i} 
                    style={{ opacity: this.animatedValue[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 2, marginTop: 3 }}                     
                    />
            )
        })

        return (
            <View style={styles.container}>
                {animations}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})