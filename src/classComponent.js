// In React, there are two types of components: Functional components and Class components.
// Class components were the traditional way to create components before functional components 
// with hooks became popular. 
// They allow you to use features like state and lifecycle methods directly.

import { Component } from 'react'; // This line imports Component class from the react library..


// This line tells that I want to create a class- based component and Greeting is the Subclass of Component.
// Component class comes from React and provides functionality like render() and lifecycle methods.

class Greeting extends Component { 

    // render () =>Every class component must have a render() method. 
    // This method is responsible for describing what the UI should look like. 
    // It returns JSX (JavaScript XML), which is similar to HTML but can contain JavaScript expressions.
    
  render() { 
    return <h1>Hello, World!</h1>;
  }
}

export default Greeting;