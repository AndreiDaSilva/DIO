import { Box, Button, Grid, GridItem, Heading, IconButton, Input, InputGroup, InputLeftAddon, Stack, Text } from '@chakra-ui/react'
import { FaFacebook, FaGoogle, FaKey, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {useForm} from 'react-hook-form'
import React from 'react'

const Login = () => {

    const {
        register, 
        watch,
        formState: {errors, isValid}
    } = useForm();
 
    const form = watch();

    console.log(form)
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
                <Box display='flex' flexDirection='column' alignItems='center' color='#fff'>
                    <Heading size='lg' fontSize='50px' noOfLines={1}>Faça seu cadastro</Heading>
                    <Text fontSize='1xl' maxW='60%' textAlign='center' fontWeight='100' p='2rem'>Ainda não tem cadastro? Criar um, é rápido e fácil! Click no botão a baixo e faça agora mesmo.</Text>
                    <Button
                        title='CADASTRAR'
                        variant='outline'
                        colorScheme='gray'
                        color='#fff'
                        _hover={{ bg: '#fff', color: '#58AF9C' }}>
                        CADASTRAR
                    </Button>
                </Box>
            </GridItem>
            <GridItem
                m='0'
                w='100%'
                h='100%'
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}

            >
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Heading size='lg' fontSize='50px' noOfLines={1} color={'#58AF9C'} p='1rem'>Faça Login</Heading>
                    <Box display='flex' justifyContent='space-evenly' p='1rem' w='70%'>
                        <IconButton
                            colorScheme='teal'
                            bg='#58AF9C'
                            aria-label={'Facebook'}
                            icon={<FaFacebook />}
                            borderRadius={50}
                        />
                        <IconButton
                            colorScheme='teal'
                            bg='#58AF9C'
                            aria-label={'Linkendin'}
                            icon={<FaLinkedin />}
                            borderRadius={50}
                        />
                        <IconButton
                            colorScheme='teal'
                            bg='#58AF9C'
                            aria-label={'Google'}
                            icon={<FaGoogle />}
                            borderRadius={50}
                        />
                    </Box>
                    <Text>ou use seu usuario/email e senha para fazer login</Text>
                    <Box p='6'>
                        <form>
                            <Stack spacing={4} alignItems='center'>
                                <InputGroup>
                                    <InputLeftAddon>
                                        <MdEmail />
                                    </InputLeftAddon>
                                    <Input type='email' placeholder='usuario/email' w='50vh' {...register('email')}/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon>
                                        <FaKey />
                                    </InputLeftAddon>
                                    <Input type='password' placeholder='senha' {...register('password')}/>
                                </InputGroup>
                                <Button
                                    title='ENTRAR'
                                    colorScheme='teal'
                                    variant='solid'
                                    _hover={{ bg: '#58AF9C', color: '#fff' }}>
                                    ENTRAR
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    )
}

export default Login