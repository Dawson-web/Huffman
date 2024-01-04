import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  //初始化state
  initialState: {
    count: 0,
  },
  //编写修改数据的方法 同步方法 支持直接修改
  reducers: {
    //这里的状态可以直接修改而不用通过替换
    inscrement(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToNum(state, action) {
      state.count = action.payload;
    },
  },
});

// 结构出来actionCreater函数
const { inscrement, decrement, addToNum } = counterStore.actions;
//获取reducer
const reducer = counterStore.reducer;

export { addToNum, decrement, inscrement };
export default reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const counterStore = createSlice({
//   name:"counter",
//   initialState:{
//     count:0
//   },
//   reducers:{
//     inscrement(state){
//       state.count++
//     },
//     decrement(state){
//       state.count--
//     }
//   }
// });

// const {inscrement,decrement} = counterStore.actions;

// const reducer = counterStore.reducer;

// export { decrement,inscrement };
// export default reducer;
