import React from 'react'
import { Stack, Button } from '@chakra-ui/react'
import { IButton } from './types'

const CButton = ({ title, onClick, variant, colorScheme, _hover, color, width}: IButton) => {
    return (
        <Stack alignItems='center' p='1rem'>
            <Button
                colorScheme={colorScheme}
                variant={variant}
                onClick={onClick}
                color={color}
                w={width}
                _hover={{_hover}}>
                {title}
            </Button>
        </Stack>
    )
}

export default CButton