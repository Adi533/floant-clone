import {createSlice} from "@reduxjs/toolkit";
import data from "../db/data";
const initialState = {
    products: data,
    cart:[],
    total:0,
    count:0,
};

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addToCart : (state,action)=>{
            state.cart =[...state.cart,action.payload];
            state.total = state.total + action.payload.price;
            state.count=state.count + 1;
        },
        removeFromCart : (state,action)=>{
            state.cart =state.cart.filter((i,index)=>index !== action.payload.index);
            state.total = state.total - action.payload.price;
            state.count=state.count - 1;

        },
    },
});
export const {addToCart,removeFromCart} = cartSlice.actions;  
export default cartSlice.reducer;