import { combineReducers } from "redux" //reducerを結合する,idenx.jsはreducerをまとめるファイル
import count from "./count"

export default combineReducers({ count })
//複数指定した場合（今回のようなreducerが１つなのは稀なケース）
// export default combineReducers({ count, foo, bar,  })