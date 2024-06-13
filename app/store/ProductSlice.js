const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { getallproducts, getproductbyId, getproductsbyCategory } = require("../_utils/ProductApi");



const initialState = 
{
 Productlist:[],
 ProductInfo:{},
 isloading:true,
}

export const fetchProducts = createAsyncThunk("product/fetchProducts",async()=>{
    return getallproducts().then(res=>res.data);
})

export const fetchProductbyId = createAsyncThunk("product/fetchProductbyId",async(id)=>{
    return getproductbyId(id).then(res=>res.data);
})
export const fetchProductsbyCategory = createAsyncThunk("product/fetchProductsbyCategory",async(category)=>{
    return getproductsbyCategory(category).then(res=>res.data);
})

const productSlice = createSlice({
    name:"product",
    initialState,
    extraReducers:(builder)=>
    {   
        //allproducts
    builder.addCase(fetchProducts.pending,(state)=>{
        state.isloading=true;       
        })
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
        state.isloading = false;
        state.Productlist = action.payload;
    })
    // product by specfic id
    builder.addCase(fetchProductbyId.pending,(state)=>{
        state.isloading=true;       
        })
    builder.addCase(fetchProductbyId.fulfilled,(state,action)=>{
        state.isloading = false;
        state.ProductInfo = action.payload;
    })
    // all products in specfic category
    builder.addCase(fetchProductsbyCategory.pending,(state)=>{
        state.isloading=true;       
        })
    builder.addCase(fetchProductsbyCategory.fulfilled,(state,action)=>{
        state.isloading = false;
        state.Productlist = action.payload;
    })
    }
});


export default productSlice.reducer ; 
