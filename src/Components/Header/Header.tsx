
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addCalc } from '../../redux/sllices/calcListSlice';
import { arrListSelector } from 'redux/selectors/arrListSelector';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CalculateIcon from '@mui/icons-material/Calculate';
import Alert from '@mui/material/Alert';
import { Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { v4 as uuidv4 } from 'uuid';
import Container from "@mui/material/Container";



function Header() {

    const dispatch = useDispatch();
    const calcArr = useSelector(arrListSelector);
    const [checked, setChecked] = useState(false);


    const addСalculator = () => {
        
        if (calcArr.length === 4 ){ 
            setChecked(true);
            return;
        }

        let num = uuidv4();
        dispatch(addCalc(num));
    }

    
    if(calcArr.length < 4 && checked){
        setChecked(false);
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            
            <AppBar position="static" >
                
                    <Toolbar> 
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 2, pr: 2, borderRight: 1.5}}>
                            Варианты
                        </Typography>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={addСalculator}
                        >
                            <CalculateIcon />
                        </IconButton>
  
                    </Toolbar>
                
            </AppBar>
            
            
            <Collapse in={checked}>
            
            <Alert 
                severity="info"
                action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setChecked(false);

                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >Достигнуто максимальное количество "Вариантов"</Alert>
                
            </Collapse> 
                
        </Box>
    );
}

export default Header;