import React from 'react'
import { TextField, ThemeProvider, createTheme } from '@mui/material'

const themeDark = createTheme({
    palette: {
        mode: 'dark',
    },
});


function Input({ label, fullWidth, margin, width }) {
    return (
        <>
            <ThemeProvider theme={themeDark}>
                <TextField
                    color='primary'
                    id="outlined-basic"
                    label={label}
                    variant="outlined"
                    margin={margin}
                    sx={{ minWidth: { width }}} />
            </ThemeProvider>
        </>
    )
}

export default Input;
