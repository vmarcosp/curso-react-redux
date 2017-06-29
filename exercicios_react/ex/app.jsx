import React, {Component} from 'react';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {value:this.props.value}
    }

    sum(delta){
        this.setState({value:this.state.value + delta});
    }

    render(){
        return(
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={()=> this.sum(1)}>INCREMENT</button>
                <button onClick={()=> this.sum(-1)}>DECREMENT</button>
            </div>
        );
    }
} 