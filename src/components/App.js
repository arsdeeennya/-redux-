import React, {Component} from "react"
import {connect} from "react-redux"
// state,actionとcomponentとの関連付けを行ってviewのイベントで状態を遷移されて、
// 遷移後の状態を画面に再描画する
// reducerがコンストラクタの役割を担う
import {increment, decrement} from "../actions"

class App extends Component {
	render() {
		const props = this.props
		
		return (
			<React.Fragment>
				<div>value: {props.value}</div>
				<a onClick={props.increment}>+1</a>
				<a onClick={props.decrement}>-1</a>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({ value: state.count.value })

// const mapStateToProps = dispatch => ({
// 	increment: () => dispatch(increment()),
// 	decrement: () => dispatch(decrement())
// })

// あるアクションが発生した時にreducerにtypeに応じた状態遷移を実行させるための関数がdispatch（以下は省略で書いたもの）
const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App)