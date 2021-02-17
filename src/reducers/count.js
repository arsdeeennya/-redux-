//stateの変更の責任を担う
//reducerは、actionを受けてstateを変更するの為のメソッドです
import { INCREMENT, DECREMENT } from "../actions"

const initialState = { value:0 }

// reducerは、現在のstateとactionを受けて新しいstateを返すだけの純粋なメソッドです。
export default (state = initialState, action ) => {
	switch(action.type) {
		case INCREMENT:
			return{ value: state.value +1 }
		case DECREMENT:
			return{ value: state.value -1 }
		default:
			return state
	}
}