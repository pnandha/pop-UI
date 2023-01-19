import { createSlice } from '@reduxjs/toolkit'

export interface MyState {
    user: any
    id: string
    userName: string
    userEmail: string
    userNumber: string
    userLocation: string
    userStringLocation: string
  } 

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: "",
        userName: "",
        userEmail: "",
        userNumber: "",
        userLocation: "",
        userStringLocation: "",
    } as MyState,
    reducers: {
        id: (state, action) => {
            state.id = action.payload
        },
        userName: (state, action) => {
            state.userName = action.payload
        },
        userEmail: (state, action) => {
            state.userEmail = action.payload
        },
        userNumber: (state, action) => {
            state.userNumber = action.payload
        },
        userLocation: (state, action) => {
            state.userLocation = action.payload
        },
        userStringLocation : (state, action) => {
            state.userStringLocation = action.payload
        },
    }
})



export const {
    id, userName, userEmail, userNumber, userLocation, userStringLocation
} = userSlice.actions

export default userSlice.reducer
