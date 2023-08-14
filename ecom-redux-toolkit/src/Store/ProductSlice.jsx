import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
export const STATUESES = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error',
})
const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUESES.IDLE
    },
    // reducers: {
    //     setProducts(state, action) {
    //         state.data = action.payload
    //     },
    //     setStatus(state, action) {
    //         state.status = action.payload
    //     }
    // }

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUESES.LOADING
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUESES.IDLE
            })
            .addCase(fetchProducts.rejected, (state, actrion) => {
                state.status = STATUESES.ERROR
            })
    }})
export default productSlice.reducer;                       

export const fetchProducts = createAsyncThunk('products/fetch', async () => { //Second method with Thunk
    const res = await fetch('http://fakestoreapi.com/products')
    const data = await res.json()
    return data
})

//export const { setProducts, setStatus } = productSlice.actions;
// export function fetchProducts() {                                           //First method with Thunk
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUESES.LOADING))
//         try {
//             const res = await fetch('http://fakestoreapi.com/products')
//             const data = await res.json()
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUESES.IDLE))
//         }
//         catch(error){
//             console(error)
//             dispatch(setStatus(STATUESES.ERROR))
//         }
//     }
// }