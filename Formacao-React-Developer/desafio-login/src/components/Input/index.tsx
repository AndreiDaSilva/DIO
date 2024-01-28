import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React from 'react'
import { IInput } from './type'

const CInput = ({ leftIcon, placeholder, name, width, }: IInput) => {
    return (
        <Stack spacing={4}>
            <InputGroup m='.5rem' w='60vh'>
                <InputLeftElement >
                    {leftIcon}
                </InputLeftElement>
                <Input placeholder={placeholder} name={name} w={width}/>
            </InputGroup>
        </Stack>
    )
}

export default CInput