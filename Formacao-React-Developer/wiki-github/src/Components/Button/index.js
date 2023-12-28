import React from 'react'
import * as C from '@chakra-ui/react'

export default function Button({contend, onClick, colorScheme, variant, icon}) {
    return (
        <>
            <C.Button h='1.75rem' size='sm' colorScheme={colorScheme} variant={variant} onClick={onClick} margin={'0 5px'} rightIcon={icon}>
                {contend}
            </C.Button>
        </>
    )
}
