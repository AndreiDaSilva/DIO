import React from 'react'
import { Button as ButtonMui} from '@mui/material';

function Button({ icon, conteund, color}) {
    return (
        <>
            <ButtonMui variant="outlined" startIcon={icon} color={color}>
                {conteund}
            </ButtonMui>
        </>
    )
}

export default Button;
