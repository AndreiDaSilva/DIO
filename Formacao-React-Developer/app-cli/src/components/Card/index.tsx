import React from 'react'
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from "./styles"
import {FiThumbsUp} from 'react-icons/fi'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture />
                    <div>
                        <h4>Andrei Robson da Silva</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito o curso de html e css no bootcam DIO do Global avanade... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>HTML e CSS</h4>
                    <p>
                        <FiThumbsUp /> 14
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }
