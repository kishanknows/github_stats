import { createSlice} from "@reduxjs/toolkit";

const statSlice = createSlice({
    name : 'username',
    initialState : {username : ''},
    reducers : {
        setUserName(state, action){
            state.username = action.payload
        }
    }
})

export const { setUserName } = statSlice.actions;
export default statSlice.reducer;