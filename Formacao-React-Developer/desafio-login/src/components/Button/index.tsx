import React from 'react'
import { Stack, Button } from '@chakra-ui/react'
import { IButton } from './types'

const CButton = ({ title, onClick }: IButton) => {
    return (
        <Stack>
            <Button colorScheme='green' variant='solid' onClick={onClick}>
                {title}
            </Button>
        </Stack>
    )
}

export default CButton