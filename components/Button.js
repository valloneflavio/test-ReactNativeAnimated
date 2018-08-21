'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';

export default class Button extends React.Component {

    constructor() {
        super()
    }

    // on press callback
    onPress = () => {
        this.props.onPress && this.props.onPress();
    }

    render() {

        const props = this.props;        

        return (
            <TouchableHighlight style={styles.button} onPress={this.onPress}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableHighlight>
        );
    }
}

var styles = StyleSheet.create({
    button: {
        height: 60,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#ededed',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        padding: 5,
    }
});