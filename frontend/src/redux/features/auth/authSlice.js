import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import authServices from "./authServices";


const initialState={
 isLoading: false,
 isSuccess: false,
 isError: false,
 isLoggedIn: false,
 message: ""
};


// Register User 
export const register = createAsyncThunk(
    "auth/register",
    async(userData, thunkAPI) => {
        try {
            return await authServices.register(userData);
        } catch (error) {
            const message = 
         (error.response &&
            error.response.data &&
            error.response.data.message) || 
            error.message ||
            error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
);

// Login User
export const login = createAsyncThunk(
    "auth/login",
    async(userData, thunkAPI) => {
    try {
        return await authServices.login(userData)
        } catch (error) {
            const message = 
            (error.response &&
               error.response.data &&
               error.response.data.message) || 
               error.message ||
               error.toString();
               return thunkAPI.rejectWithValue(message)  
        }
    }
)

// Logout
export const logout = createAsyncThunk(
    "auth/logout",
     async (_, thunkAPI)=> {
    try {
        return await authServices.logout();
    } catch (error) {
        const message = 
         (error.response &&
            error.response.data &&
            error.response.data.message) || 
            error.message ||
            error.toString();
            return thunkAPI.rejectWithValue(message)
    }
})


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // Register
        .addCase(register.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            state.message = action.payload;
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
        })
        // Login
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            state.message = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
        })
        .addCase(logout.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = false;
            state.message = action.payload;
        })
        .addCase(logout.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
        })
    }
});

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;