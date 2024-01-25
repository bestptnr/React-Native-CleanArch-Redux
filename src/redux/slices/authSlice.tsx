import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { POST } from "../../api/index"
import { ENDPOINT } from '../../constants';


interface AuthState {
    userData: any;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
}

const initialState: AuthState = {
    userData: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
};

export const login = createAsyncThunk('auth/login', async (params: any, thunkAPI) => {
    try {
        const response:any = await POST(ENDPOINT.LOGIN, params);
        return response;
    } catch (error) {
        console.error('error >>> file: authSlice.tsx >>> error : ', error);
        return thunkAPI.rejectWithValue(error);
    }
});
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        console.log('info >>> success logout')
        return null
    } catch (error) {
        console.error('error >>> file: authSlice.tsx >>> error : ', error);
        return thunkAPI.rejectWithValue(error);
    }
});

const AuthSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.userData = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
        builder.addCase(logout.fulfilled, (state, action: PayloadAction<any>) => {
            state.userData = null;

        });
    },
});


export default AuthSlice.reducer;