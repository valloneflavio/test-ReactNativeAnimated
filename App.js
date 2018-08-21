import React from 'react';
import { Button, View } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json\

// Import pages
import AnimatedSpin from './src/AnimatedSpin';
import AnimatedEasing from './src/AnimatedEasing';
import AnimatedTiming from './src/AnimatedTiming';
import AnimatedSpring from './src/AnimatedSpring';
import AnimatedParallel from './src/AnimatedParallel';
import AnimatedSequence from './src/AnimatedSequence';
import AnimatedStagger from './src/AnimatedStagger';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Animated Spin"
          onPress={() => this.props.navigation.navigate('AnimatedSpin')}
        />  
        <Button
          title="Go to Animated Easing"
          onPress={() => this.props.navigation.navigate('AnimatedEasing')}
        />  
        <Button
          title="Go to Animated Timing"
          onPress={() => this.props.navigation.navigate('AnimatedTiming')}
        />  
        <Button
          title="Go to Animated Spring"
          onPress={() => this.props.navigation.navigate('AnimatedSpring')}
        />  
        <Button
          title="Go to Animated Parallel"
          onPress={() => this.props.navigation.navigate('AnimatedParallel')}
        />   
        <Button
          title="Go to Animated Sequence"
          onPress={() => this.props.navigation.navigate('AnimatedSequence')}
        />   
        <Button
          title="Go to Animated Stagger"
          onPress={() => this.props.navigation.navigate('AnimatedStagger')}
        />                                                        
      </View>
    );
  }
}


// config RootStack for navigator
const AppNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: `React Animated HomeScreen`,
      }),        
    },
    AnimatedSpin: {
      screen: AnimatedSpin,
      navigationOptions: () => ({
        title: `Animated Spin`,
      }),      
    },
    AnimatedEasing: {
      screen: AnimatedEasing,
      navigationOptions: () => ({
        title: `Animated Easing`,
      }),        
    },  
    AnimatedTiming: {
      screen: AnimatedTiming,
      navigationOptions: () => ({
        title: `Animated Timing`,
      }),        
    },  
    AnimatedSpring: {
      screen: AnimatedSpring,
      navigationOptions: () => ({
        title: `Animated Spring`,
      }),        
    },   
    AnimatedParallel: {
      screen: AnimatedParallel,
      navigationOptions: () => ({
        title: `Animated Parallel`,
      }),        
    },  
    AnimatedSequence: {
      screen: AnimatedSequence,
      navigationOptions: () => ({
        title: `Animated Sequence`,
      }),        
    },  
    AnimatedStagger: {
      screen: AnimatedStagger,
      navigationOptions: () => ({
        title: `Animated Stagger`,
      }),        
    },                        
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}