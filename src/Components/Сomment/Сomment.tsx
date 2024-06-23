import TextField from '@mui/material/TextField';

const Comment = () => {
    return (
        <>
             <TextField 
                fullWidth 
                id="outlined-textarea"
                inputProps={{ spellCheck: 'false' }}
                placeholder="Комментарий"
                multiline
            />
        </>
    )
}

export default Comment;