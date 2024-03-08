import { useRef } from 'react';
import styled from 'styled-components';

export const ImageUploader = ({ setImageUrls, imageUrls }) => {
    const inputRef = useRef()

    const handleFileChange = (event) => {
        const files = event.target.files;
        const urls = Array.from(files).map(file => ({
            url: URL.createObjectURL(file),
            id: `${Date.now()}-${Math.random()}` // Genera un ID único
        }));
        setImageUrls(urls);
    };

    const handleClick = () => {
        inputRef.current.click();
    };

    return (
        <Container>
            <input type="file" multiple accept="image/*" onChange={handleFileChange} ref={inputRef} style={{ display: 'none' }} />
            <div className='input' onClick={handleClick}>
                Seleccionar imagenes
            </div>
            <div>
                Imagenes seleccionadas: {imageUrls.length}
            </div>
        </Container>
    );
};


const Container = styled.div`
    padding: 0 14px;
    padding-top: 14px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    div{
        width: 100%;
        height: 50px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 20px;
        font-size: 13px;
        background-color: #3a354126;
        &:nth-of-type(2){
            background-color: #F4F5FA;
        }
    }
    .input{
        cursor: pointer;
        &:hover{
            background-color: #3a354119;
        }
    }
    @media (min-width: 800px){
        padding: 0 24px;
        padding-top: 24px;
    }
`