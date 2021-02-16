import { combineReducers } from "redux"
import count from "./count"

export default combineReducers({ count })
//複数指定した場合
// export default combineReducers({ count, foo, bar,  })