import { addCalc } from '../../redux/sllices/calcListSlice';
import { Typography, Button, Box } from "@mui/material"
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from 'redux-hook';


const Welcom = () => {

    const dispatch = useAppDispatch();
    
    const addСalculator = () => {
        let num = uuidv4();
        dispatch(addCalc(num));
    }


    return (
        
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={14}
        >
            <Box 
            width={700} 
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            
            >
             <Typography variant="h1" component="h1" align='center' mb={8} sx={{fontSize: 35, lineHeight: 1.5, color: '#1976D2'}}>
                  "Варианты" - несколько калькуляторов  с текстовыми полями на одном экране.
              </Typography>
              <Button  variant="contained" onClick={() => addСalculator()}>Создать "Вариант"</Button>
            </Box>
        </Box>

        
    )
}

export default Welcom;