import { Flex, Icon, Text } from '@chakra-ui/react'
import {FaGithub} from 'react-icons/fa'
import React from 'react'

export default function Header() {
  return (
    <header>
      <Flex alignItems={'center'} justifyContent={'space-evenly'}>
      <Icon as={FaGithub} boxSize={24} color={'#fff'}/>
      <Text color={'#fff'} fontSize={'4xl'} > Wiki GitHub</Text>
      </Flex>
    </header>
  )
}
