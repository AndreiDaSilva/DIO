import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React from 'react'
import { IInput } from './type'

const CInput = ({ leftIcon, placeholder, name }: IInput) => {
    return (
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement >
                    {leftIcon}
                </InputLeftElement>
                <Input placeholder={placeholder} name={name}/>
            </InputGroup>
        </Stack>
    )
}

export default CInput