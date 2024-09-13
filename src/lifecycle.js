import { Component } from 'react';
import Lifecycle2 from './lifecycle2';

class Lifecycle extends Component {
    // Constructor is the first method called when a component is created and it is used to initialize
    // the component's state.
    constructor (props){
        //super(props) always call first,to access this.props and set up the component as instance of React.Component.
        super(props);
        // Initialize the component's internal state (this.state).
        this.state = {
            counter:0
        };
        console.log("Constructor")
        this.onClick();
    }

    componentDidMount(){
        //This method is called after the component has been rendered to the DOM.
        //It used of fetching Data from API.
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        //This method is called after the component updates, 
        //meaning after a change in the props or state that causes a re-render.
        console.log("componentDidUpdate");
    }
    onClick(){
        this.setState({counter:this.state.counter + 1 })
    }

    // Render method is responsible for returning the JSX (UI) that the component display on the screen.
    render(){
        console.log("render");
        return(
            <div>
                <h2>This is Class Component</h2>
                <br />
                Counter:{this.state.counter}
                <button onClick={this.onClick.bind(this)}>+</button>
                { this.state.counter <=3 ? <Lifecycle2 /> :<></>}
            </div>
        )
    }
}

export default Lifecycle;