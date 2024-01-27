import { Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

function Login() {
    return (

        <Grid
            templateColumns='repeat(2, 1fr)'
            gap={4}
            alignItems={'center'}
            justifyContent={'center'}
            display={'flex'}
            h='100%'
            bg='#ffffff'
            borderRadius='25'
        >
            <GridItem
                w='80%'
                h='100%'
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                bg='#58AF9C'
                borderRadius='25px 0 0 25px'
            >
                SingUP
            </GridItem>
            <GridItem
                m='0'
                w='100%'
                h='100%'
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                
                >
                SingIn
            </GridItem>
        </Grid>
    )
}

export default Login