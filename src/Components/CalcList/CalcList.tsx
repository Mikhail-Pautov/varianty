import Calculator from '../Сalculator/Сalculator';
import { deleteCalc } from '../../redux/sllices/calcListSlice';
import { nameCalcSelector } from 'redux/selectors/nameCalcSelector';
import { useSelector } from 'react-redux';
import { calcListSelector } from 'redux/selectors/calcListSelector';
import { useAppDispatch } from 'redux-hook';
import Box from '@mui/material/Box';






export const CalcList = () => {
    
    const dispatch = useAppDispatch();
    const calcArr = useSelector(calcListSelector);
    const counter = useSelector(nameCalcSelector);


    const removeCalc = (index: number) => {
        dispatch(deleteCalc(index));
    }
    
    return (
        <Box
            display="flex" 
            justifyContent="space-around"
            flexWrap="wrap"
        >
           {calcArr.map((item, index) => <Calculator key={item} index={index} counter={counter[item]} removeCalc={removeCalc}/>)}  
        </Box>
    )
}