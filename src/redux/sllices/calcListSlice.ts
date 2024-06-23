import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface CalcListProp {
    arrList: string[],
    nameCalc: {[key: string]: number},
    counter: number,
}


const initialState: CalcListProp = {
    arrList: [],
    nameCalc: {},
    counter: 0
};


const calcListSlice = createSlice({
    name: 'calcList',
    initialState,
    reducers: {
        addCalc: (state, action: PayloadAction<string>) => {
            state.arrList.push(action.payload);
            state.nameCalc[action.payload] = state.counter + 1;
            ++state.counter;
        },
        deleteCalc: (state, action: PayloadAction<number>) => {
            
            let newArr = state.arrList.filter(el => el !== state.arrList[action.payload] )
            state.arrList = newArr;
            if(state.arrList.length === 0){
                state.nameCalc = {};
                state.counter = 0;
            }
        }
            
        
    },
    
    
})



const {reducer, actions} = calcListSlice;


export default calcListSlice.reducer;
export const { addCalc, deleteCalc } = actions;




