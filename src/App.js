import React, {Component} from "react";

const App = () => (<Counter></Counter>)

class Counter extends Component {
	constructor(props){
		super(props)
		this.state = { count: 0 }
	}
	
	handlePlusButton = () => {
		this.setState({ count: this.state.count + 1})
	}
	
	handleMinusButton = () => {
		this.setState({ count: this.state.count - 1})
	}
	
	render() {
		return (
			<React.Fragment>
				count: {this.state.count}
				<a onClick={this.handlePlusButton}>+1</a>
				<a onClick={this.handleMinusButton}>-1</a>
			</React.Fragment>
		)
	}
}

export default App;