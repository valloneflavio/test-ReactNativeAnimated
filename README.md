# README #

## What is this repository for? ##

App about React Native Animations using the Animated API

Inspired by a great article [Link Here](https://medium.com/react-native-training/react-native-animations-using-the-animated-api-ebe8e0669fae)


### Configuration ###
Open Terminal and install all packages by command:

`yarn install`

## Quick View ##

The Animated library is designed to make animations fluid, powerful, and easy to build and maintain. Animated focuses on declarative relationships between inputs and outputs, with configurable transforms in between, and simple start/stop methods to control time-based animation execution.

The simplest workflow for creating an animation is to create an Animated.Value, hook it up to one or more style attributes of an animated component, and then drive updates via animations using Animated.timing():

```javascript
Animated.timing(
  // Animate value over time
  this.state.fadeAnim, // The value to drive
  {
    toValue: 1, // Animate to final value of 1
  }
).start(); // Start the animation
```

There are two value types you can use with Animated:

* Animated.Value() for single values
* Animated.ValueXY() for vectors
Animated.Value can bind to style properties or other props, and can be interpolated as well. A single Animated.Value can drive any number of properties.

---

There are three main Animated methods that you can use to create animations:

1. Animated.timing() — Maps time range to easing value.
2. Animated.decay() — starts with an initial velocity and gradually slows to a stop.
3. Animated.spring() — Simple single-spring physics model (Based on Rebound and Origami). Tracks velocity state to create fluid motions as the toValue updates, and can be chained together.

We will be covering Animated.timing() and Animated.spring() as they are the most useful in my experience.


Along with these three Animated methods, there are three ways to call these animations along with calling them individually. We will be covering all three of these as well:

1. Animated.parallel() — Starts an array of animations all at the same time.
2. Animated.sequence() — Starts an array of animations in order, waiting for each to complete before starting the next. If the current running animation is stopped, no following animations will be started.
3. Animated.stagger() — Array of animations may run in parallel (overlap), but are started in sequence with successive delays. Very similar to Animated.parallel() but allows you to add delays to the animations.


#### Animated.timing ####
```javascript
// Example implementation:
Animated.timing(
  someValue,
  {
    toValue: number,
    duration: number,
    easing: easingFunction,
    delay: number
  }
)
```

#### Animated.spring ####
We call Animated.spring, passing in two arguments: a value to animate and a config object. The config object can take any of the following arguments: toValue (number), overshootClamping (boolean), restDisplacementThreshold (number), restSpeedThreshold (number), velocity (number), bounciness (number), speed (number), tension (number), and friction (number). The only required value is toValue, but friction and tension can help you get more control over the spring animation.

```javascript
// Example implementation:
Animated.spring(
    someValue,
    {
      toValue: number,
      friction: number
    }
)
```

#### Animated.parallel #####
Animated.parallel() starts an array of animations all at the same time.


```javascript
// API
Animated.parallel(arrayOfAnimations)
// In use:
Animated.parallel([
  Animated.spring(
    animatedValue,
    {
      //config options
    }
  ),
  Animated.timing(
     animatedValue2,
     {
       //config options
     }
  )
])
```

#### Animated.sequence ####
Like Animated.parallel(), Animated.sequence() takes an array of animations. Animated.sequence() runs an array of animations in order, waiting for each to complete before starting the next.

The main thing to notice here that is different is that we are creating our Animated.Values with a loop since we are animating so many values. We are also rendering our Animated.Views with a map function returning a new Animated.View for each item in the array.

```javascript
// API
Animated.sequence(arrayOfAnimations)
// In use
Animated.sequence([
  Animated.timing(
    animatedValue,
    {
      //config options
    }
  ),
  Animated.spring(
     animatedValue2,
     {
       //config options
     }
  )
])
```

#### Animated.stagger ####
Like Animated.parallel() and Animated.sequence(), Animated.Stagger also takes an array of animations, but these animations are started in sequence with successive delays.

The main difference here is the first argument, the delay that will be applied to each animation.

```javascript
// API
Animated.stagger(delay, arrayOfAnimations)
// In use:
Animated.stagger(1000, [
  Animated.timing(
    animatedValue,
    {
      //config options
    }
  ),
  Animated.spring(
     animatedValue2,
     {
       //config options
     }
  )
])
```


## Dependencies ##
- react
- react-native
- react-navigation

## Folders ##
* /src (App's pages)
* /components (Common components used into the app)

### Link and Utils ###
[Medium Article](https://medium.com/react-native-training/react-native-animations-using-the-animated-api-ebe8e0669fae)

[FlexBox Guide](https://facebook.github.io/react-native/docs/flexbox)

[ReactNavigator](https://reactnavigation.org/docs/en/stack-navigator.html)

[ReactAnimated](https://facebook.github.io/react-native/docs/animated)