import React from 'react';
import { useCanvasProcessor } from '../hooks/useCanvasProcessor';
import Form from './Form';
import { ImageContainer } from './ImageContainer';

const TemplateManager = ({ templateImageUrl, formStructure }) => {
    const { setTextInputs, saveForm, removeImage, textInputs, imageUrls } = useCanvasProcessor(templateImageUrl, formStructure);
    return (
        <div>
            <Form formStructure={textInputs} setTextInputs={setTextInputs} templateImageUrl={templateImageUrl} onSubmit={saveForm} />
            {imageUrls.map((image) => (
                <ImageContainer key={image.id} image={image} templateImageUrl={templateImageUrl} removeImage={removeImage} />
            ))}
        </div>
    );
};

export default TemplateManager;
