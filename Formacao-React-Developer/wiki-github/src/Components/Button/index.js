import React from 'react'
import * as C from '@chakra-ui/react'

export default function Button({contend}) {
    return (
        <>
            <C.Button h='1.75rem' size='sm' bg={'green'}>
                {contend}
            </C.Button>
        </>
    )
}
