import { createSlice } from "@reduxjs/toolkit";

const bagSlice=createSlice({
  name:"bagItems",
  initialState:[],
  reducers:{
    Add: (store,action)=>{
      store.push(action.payload.itemId);
    },
    Remove: (store,action)=>{
return store.filter((id)=>{
  return id!=action.payload.id;
});
    }
  }

})
export const bagActions=bagSlice.actions;
export default bagSlice;