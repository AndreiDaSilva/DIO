import React from 'react'
import { TextField, ThemeProvider, createTheme } from '@mui/material'

const themeDark = createTheme({
    palette: {
        mode: 'dark',
    },
});


function Input({ label }) {
    return (
        <>
            <ThemeProvider theme={themeDark}>
                <TextField color='primary' id="outlined-basic" label={label} variant="outlined" />
            </ThemeProvider>
        </>
    )
}

export default Input;
