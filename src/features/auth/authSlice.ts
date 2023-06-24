import { RootState } from 'store'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginUser } from './authAction';

// export interface User {
//     loading: boolean,
//     userInfo: object,
//     userToken: string,
//     error: string,
//     success: boolean
// }

export interface User {
    userName: String,
    password: String,
    role: String
}
interface UserState {
    users: User[]
}
const initialState: UserState = {
    users: [],
}


export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<{ username: String, password: String, role: String }>) => {
            state.users.push({
                userName: action.payload.username,
                password: action.payload.password,
                role: action.payload.password
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(LoginUser.fulfilled, (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        });
    }
})

export default UserSlice.reducer;
export const { addUser } = UserSlice.actions