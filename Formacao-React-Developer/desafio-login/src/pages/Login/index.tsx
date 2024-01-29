import { Alert, AlertIcon, Box, Button, FormControl, FormErrorMessage, FormHelperText, Grid, GridItem, Heading, IconButton, Input, InputGroup, InputLeftAddon, Stack, Text } from '@chakra-ui/react'
import { FaFacebook, FaGoogle, FaKey, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import React, { useState } from 'react';

const schema = yup.object({
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório').min(8, 'No minimo 8 caracteres')
}).required();

const Login = () => {

    const {
        register,
        formState: { errors, isValid }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        reValidateMode: 'onChange',
    });



    const isErrorEmail = !errors.email?.message === false
    const isErrorPassword = !errors.password?.message === false


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
                                    <FormControl isInvalid={isErrorEmail}>
                                        <Input type='email' placeholder='usuario/email' w='50vh' {...register('email')} />
                                        {!isErrorEmail ? (
                                            <FormHelperText>
                                                {null}
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage>
                                                <Alert status='error'>
                                                    <AlertIcon />
                                                    {errors?.email?.message}
                                                </Alert>
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon>
                                        <FaKey />
                                    </InputLeftAddon>
                                    <FormControl isInvalid={isErrorPassword}>
                                        <Input type='password' placeholder='senha' {...register('password')} />
                                        {!isErrorPassword ? (
                                            <FormHelperText>
                                                {null}
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage>
                                                <Alert status='error'>
                                                    <AlertIcon />
                                                    {errors?.password?.message}
                                                </Alert>
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>
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