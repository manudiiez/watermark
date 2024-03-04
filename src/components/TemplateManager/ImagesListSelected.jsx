import React from 'react'
import styled from 'styled-components'
import { ImageContainer } from './ImageContainer'

const ImagesListSelected = ({ imageUrls, templateImageUrl, removeImage }) => {
    return (
        <Container className='imagesContainer'>
            <div className='title'>
                IMAGENES SELECCIONADAS
            </div>
            {
                imageUrls.length === 0 ? (
                    <p>no hay imagenes seleccionadas</p>
                ) : (
                    <div className="content">
                        {imageUrls.map((image) => (
                            <ImageContainer key={image.id} image={image} templateImageUrl={templateImageUrl} removeImage={removeImage} />
                        ))}
                    </div>
                )
            }
        </Container>
    )
}

export default ImagesListSelected

const Container = styled.div`
    border-radius: 6px;
    background-color: #ffffff;
    overflow: hidden;
    box-shadow: 0px 2px 10px 0px #3a354119;
    width: 100%;
    >p{
        padding: 0 14px;
        padding-bottom: 14px;
    }
    .title{
        width: 100%;
        border-bottom: 1px solid #3a35411e;
        padding: 14px;
        margin-bottom: 32px;
        h2{
            font-size: 14px;
            font-weight: 500;
        }
    }
    .content{
        padding: 0 14px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
    } 

    @media (min-width: 1000px) {
        .title{
            padding: 14px 24px;
            margin-bottom: 38px;
            h2{
                font-size: 16px;
                font-weight: 500;
            }
        }
        >p{
            padding: 0 24px;
            padding-bottom: 24px;
        }

        .content{
            padding: 0 24px;
        }
}
`