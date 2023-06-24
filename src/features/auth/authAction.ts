// import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./authSlice";

const baseURL = 'https://dev.examprephub.com/api/smartAct/'


export const LoginUser = createAsyncThunk("auth/signin", async (user: User, thunkAPI) => {
    const response = await fetch(baseURL + 'auth/signin', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userName: user.userName,
            password: user.password,
            role: user.role

        }),
    });
    const data = await response.json();
    localStorage.setItem('currentUser', JSON.stringify(data))
    localStorage.setItem('accessToken', data.accessToken)
    return data;
},
);