import React from 'react'
import { TextField, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        text: {
            primary: {
                main: '#fff'
            },
        },
    },
});


function Input({ label }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <TextField color='primary' id="outlined-basic" label={label} variant="outlined" />
            </ThemeProvider>
        </>
    )
}

export default Input;
