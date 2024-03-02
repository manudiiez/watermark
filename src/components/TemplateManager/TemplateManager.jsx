import React from 'react';
import { useCanvasProcessor } from '../../hooks/useCanvasProcessor';
import Form from './Form';
import { ImageContainer } from './ImageContainer';
import styled from 'styled-components';

const TemplateManager = ({ templateImageUrl, data }) => {
    const { setTextInputs, saveForm, removeImage, textInputs, imageUrls } = useCanvasProcessor(templateImageUrl, data?.form_structure);
    return (
        <Container>
            <Form formStructure={textInputs} title={data.title} setTextInputs={setTextInputs} templateImageUrl={templateImageUrl} onSubmit={saveForm} />
            <div className='imagesContainer'>
                {imageUrls.map((image) => (
                    <ImageContainer key={image.id} image={image} templateImageUrl={templateImageUrl} removeImage={removeImage} />
                ))}
            </div>
        </Container>
    );
};

export default TemplateManager;

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
.imagesContainer{
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}
@media (min-width: 1000px) {
    flex-direction: row;
}
`