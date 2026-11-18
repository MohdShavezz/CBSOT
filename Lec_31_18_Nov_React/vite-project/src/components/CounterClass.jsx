import { Component } from "react";

class CounterClass extends Component{
    constructor(){
        super();
        this.state={count:0}
    }

    increment=()=>{
        this.setState({count:this.state.count+1})
    }


    render(){
        return(
            <>
                <h2>Class based</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>INC</button>
            </>
        )
    }
}

export default CounterClass