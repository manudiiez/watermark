import React from 'react';
import styled from 'styled-components';

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
            <button onClick={downloadImage}>Descargar Imagen</button>
            <button onClick={() => removeImage(image.id)}>Eliminar Imagen</button>

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
        .imageChild{
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: calc(100% - 4px);
            object-fit: cover;
        }
        img{
            width: 100%;
        }
    }

`