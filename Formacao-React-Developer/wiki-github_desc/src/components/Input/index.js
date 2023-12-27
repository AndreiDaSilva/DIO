import React from 'react'
import { TextField } from '@mui/material'


function Input({ label, fullWidth, margin, width, value, onChange }) {
    return (
        <>
            <TextField
                color='primary'
                id="outlined-basic"
                label={label}
                variant="outlined"
                margin={margin}
                sx={{ minWidth: { width } }} 
                value={value}
                onChange={onChange}
                />
        </>
    )
}

export default Input;
