import { useEffect, useState } from 'react';
import Comment from '../Сomment/Сomment';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';




interface СalculatorProps {
    index: number, 
    removeCalc: (index: number) => void,
    counter: number,
}

type dataArrItem = {
    title: string,
    num: string
}



const Сalculator = ({index, removeCalc, counter}: СalculatorProps) => {

    const [showInput, setShowInput] = useState(false);
    const [dataArr, setDataArr] = useState<dataArrItem[]>([]);
    const [title, setTitle] = useState('');
    const [num, setNum] = useState('');
    const [total, setTotal] = useState(0)
    const [erorrValid, setErrorValid] = useState(false);


    const showDataItem = () => {
        setShowInput(!showInput)
    }

    const addData = () => {
        
        if( num !== ''){
            let a = [...dataArr, {title, num}  ];
            setDataArr(a);
            setTitle('');
            setNum('');
            setErrorValid(false);
        } else {
            setErrorValid(false)
            return;
        }
    }


    const removeTextField = (e: number) => {
        let k = dataArr.filter((item, i) => i !== e);
        setDataArr(k)
    }
    
    useEffect(() => {
        const sum = dataArr.reduce((partialSum: number, item) => partialSum + +item.num, 0);  //сумируе данные из полей
        setTotal(sum);
    }, [dataArr])

    
    return (
        <>
            <Box>
                <Box 
                width={300}
                display='flex'
                flexDirection="column"
                justifyContent="space-between"
                mt={2}
                sx={{border: '1px solid grey', borderRadius: 1, }}
                >
                    {/* заголовок */}
                    <Box display='flex' justifyContent="space-between"  height={40} sx={{borderЕopLeftRadius: 1, backgroundColor: '#1976d2'}}> 
                        <Typography p={1} sx={{fontSize: 17, color: 'white'}}>Вариант: {counter}</Typography>

                        <IconButton
                            size="medium"
                            color="inherit"
                            sx={{ marginRight: '2px' }}
                            onClick={() => removeCalc(index)}
                        >
                            <CloseIcon fontSize="medium" sx={{ color: 'white' }}/>
                        </IconButton>
                    </Box>

                    {/* поля */}
                    <Box sx={{height: '100%'}}>
                        {dataArr.map((item, index) => {
                            return (
                                <Tooltip 
                                     title="Удалить поле" 
                                     key={index}
                                     slotProps={{
                                         popper: {
                                           modifiers: [
                                             {
                                               name: 'offset',
                                               options: {
                                                 offset: [0, -14],
                                               },
                                             },
                                           ],
                                         },
                                       }}
                                >
                                <Box 
                                    display="flex" 
                                    justifyContent="space-between" 
                                    sx={{ borderBottom: '1px solid grey', cursor: 'pointer' }} 
                                    key={index}
                                    onClick={() => removeTextField(index)}
                                > 
                                    <Box p={1} sx={{fontSize: 20, overflow: 'hidden', maxWidth: 200}}>{item.title}</Box>
                                    <Box p={1} sx={{fontSize: 20, overflow: 'hidden', maxWidth: 200}}>{item.num}</Box>
                                </Box>
                                </Tooltip> 
                            )
                        })}

                        {/* showInput btn */}
                        {!showInput && 
                            <Box display="flex" justifyContent="end" sx={{p: 1,}} > 
                            <AddCircleOutlineIcon onClick={showDataItem}/>
                            </Box>
                         }

                    </Box>


                    {/* это импут */}
                    {showInput && 
                        <Box display="flex" mt={2}> 

                            <TextField
                                size="small"
                                name='title'
                                id="outlined-helperText"
                                value={title}
                                onChange={(event) => {
                                    setTitle(event.target.value);
                                }}
                                sx={{width: 300}}
                            />
                            <TextField
                                error={erorrValid}
                                size="small"
                                name='num'
                                id="outlined-helperText"
                                value={num}
                                onChange={(event) => {
                                    let value = event.target.value.replace(',', '.');
                                    let v = /[^0-9-.]/;
                                    if(v.test(value)){
                                        setErrorValid(true);
                                        return;
                                    }
                                    setErrorValid(false);
                                    setNum(value); 
                                }}
                                onKeyDown={(event) => {

                                    if(event.code === 'Enter' || event.code === 'NumpadEnter'){
                                        setShowInput(false)
                                        addData();
                                    }
                                }}
                            />

                            <Box p={1} >
                                <AddCircleOutlineIcon fontSize="small" onClick={() => {
                                    setShowInput(false)
                                    addData();
                                    }}/>
                            </Box>

                                
                        </Box>}
                        {erorrValid ? <Box mt={1}  sx={{textAlign: 'center', color: '#DE6363', fontSize: 14}}>Только числа и знак "-"</Box> : null}
                                

                    {/* итого */}
                    <Box  mt={4} display="flex" justifyContent="space-between" sx={{borderTop: '1px solid grey', maxHeight: 50, }}>
                        <Typography p={1} sx={{fontSize: 20}}>Итого:</Typography>
                        <Typography p={1} sx={{fontSize: 20}}>{total}</Typography>
                    </Box>
                </Box>
                <Comment />
            </Box>
            
            
        </>
    )
}


export default Сalculator