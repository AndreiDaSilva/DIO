import React from 'react'
import * as C from '@chakra-ui/react'
import Button from '../Button';
import { DeleteIcon } from '@chakra-ui/icons';

export default function ListRepo({ repo, handleRemoveRepo }) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }

    return (
        <C.Card color={'#fff'} bg={'#999999'} >
            <C.CardHeader>
                <C.Heading size={'md'}>{repo.name}</C.Heading>
            </C.CardHeader>
            <C.CardBody>
                <C.Text>
                    {repo.full_name}
                </C.Text>
            </C.CardBody>
            <C.CardFooter justifyContent={'flex-end'}>
                <C.Link href={repo.html_url} isExternal>
                    <Button contend={'Link'} colorScheme={'white'} variant={'link'} />
                </C.Link>
                <Button contend={'DELETE'} colorScheme={'red'} variant={'solid'} icon={<DeleteIcon />} onClick={handleRemove} />
            </C.CardFooter>
        </C.Card>
    )
}
