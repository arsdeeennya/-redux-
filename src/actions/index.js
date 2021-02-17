// reducerで使うからexportする
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

// aviewを担当するコンポーネントで使うからexportする
// オブジェクトを返すときは()をつける
export const increment = () => ({
	type: INCREMENT
})

export const decrement = () => ({
	type: DECREMENT
})
