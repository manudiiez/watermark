import React from 'react';
import { useCanvasProcessor } from '../../hooks/useCanvasProcessor';
import Form from './Form';
import styled from 'styled-components';
import ImagesListSelected from './ImagesListSelected';

const TemplateManager = ({ templateImageUrl, data, type }) => {
    const { setTextInputs, saveForm, removeImage, textInputs, imageUrls } = useCanvasProcessor(templateImageUrl, data?.form_structure, type);

    return (
        <Container>
            <Form formStructure={textInputs} title={data.title} setTextInputs={setTextInputs} onSubmit={saveForm} />
            <ImagesListSelected imageUrls={imageUrls} templateImageUrl={templateImageUrl} removeImage={removeImage} />
        </Container>
    );
};

export default TemplateManager;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (min-width: 1000px) {
        flex-direction: row;
    }
`