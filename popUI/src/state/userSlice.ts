import { createSlice } from '@reduxjs/toolkit'

export interface MyState {
    id: string
    userName: string
    userEmail: string
    userNumber: string
  } 

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id:"",
        userName:"",
        userEmail:"",
        userNumber:""
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
    }
})



export const {
    id, userName, userEmail, userNumber
} = userSlice.actions

export default userSlice.reducer
