import React from 'react'
import { Button as ButtonMui} from '@mui/material';

function Button({ icon, content, color, onClick}) {
    return (
        <>
            <ButtonMui variant="outlined" startIcon={icon} color={color} onClick={onClick}>
                {content}
            </ButtonMui>
        </>
    )
}

export default Button;
