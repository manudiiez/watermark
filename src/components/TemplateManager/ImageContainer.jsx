import React from 'react';
import styled from 'styled-components';
import { IconDownload, IconTrash } from '../Icons';

export const ImageContainer = ({ image, templateImageUrl, removeImage }) => {
    const downloadImage = () => {
        const canvas = document.getElementById(`canvas-${image.id}`);
        const url = canvas.toDataURL('image/jpeg', 0.8);
        const link = document.createElement('a');
        link.download = `custom-image-${image.id}.jpg`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (

        <Container>
            <div className='canvasContainer'>
                <canvas id={`canvas-${image.id}`} />
            </div>
            <div className='image'>
                <img src={templateImageUrl} alt="" />
                <img src={image.url} alt="" className='imageChild' />
            </div>
            <div className='controls'>
                <button onClick={downloadImage}>
                    <IconDownload />
                </button>
                <button onClick={() => removeImage(image.id)}>
                    <IconTrash />
                </button>
            </div>

        </Container>
    );
};


const Container = styled.div`
    .canvasContainer{
        height: 0;
        width: 0;
        overflow: hidden;
    }
    .image{
        position: relative;
        width: fit-content;
        img{
            position: relative;
            width: 100%;
            z-index: 20;
        }
        .imageChild{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            width: 100%;
            height: calc(100% - 4px);
            object-fit: cover;
        }
    }
    .controls{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        button{
            height: 40px;
            border: none;
            background-color: #347FC4;
            color: #FFFFFF;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            &:nth-of-type(2){
                background-color: #BE4436;
            }

            &:hover{
                opacity: .8;
            }
        }
    }

`