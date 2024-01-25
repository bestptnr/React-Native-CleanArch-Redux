import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { GET, POST } from "../../api/index"
import { ENDPOINT } from '../../constants';


interface ProductState {
    products: any;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
}

const initialState:ProductState = {
    products: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
  };
  

export const getProductList = createAsyncThunk('productList', async (_, thunkAPI) => {
    try {
        const response:any = await GET(ENDPOINT.PRODUCT_LIST);
        return response;
    } catch (error) {
        console.error('error >>> file: authSlice.tsx >>> error : ', error);
        return thunkAPI.rejectWithValue(error);
    }
});


const ProductSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProductList.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getProductList.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload;
        });
        builder.addCase(getProductList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});


export default ProductSlice.reducer;