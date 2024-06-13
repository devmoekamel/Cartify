const { createSlice } = require("@reduxjs/toolkit");
const { act } = require("react");

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
        const item = action.payload;
        const existitem = state.cartList.find(cartItem=>cartItem.id==item.id);
        if(existitem)
        {
            existitem.quantity +=1;
        }
        else{
            state.cartList.push({...item,"quantity":1});
        }
    },
    removeCartitem:(state,action)=>{
        const item = action.payload;
        const existitem = state.cartList.find(cartItem=>cartItem.id==item.id);
        if(existitem && existitem.quantity>1){
            existitem.quantity -=1;
        }else{
           state.cartList= state.cartList.filter(cartItem=>cartItem.id !=item.id);

        }
    },
    clearCart:(state)=>{
        state.cartList=[];
    }
  },
});


export default cartSlice.reducer ;

export const {addtocart,clearCart,removeCartitem} = cartSlice.actions;