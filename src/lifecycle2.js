import { Component } from 'react';

class Lifecycle2 extends Component {
    componentWillUnmount(){
        //This method is called right before the component is removed from the DOM.
        console.log("componentWillUnmount");
        
    }
     render(){
        console.log("render");
        return(
            <div>
                <h2>This is the Second Component</h2>
            </div>
        )
    }
}

export default Lifecycle2;