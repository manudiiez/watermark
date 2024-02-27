import React from 'react';
import { ImageUploader } from './ImageUploader';
import { useCanvasProcessor } from '../hooks/useCanvasProcessor';
import Form from './Form';

const TemplateManager = ({ templateImageUrl, formStructure }) => {
    const { setImageUrls, handleTextChange, imageUrls, textInputs } = useCanvasProcessor(templateImageUrl, formStructure);

    return (
        <div>
            <Form formStructure={textInputs} handleTextChange={handleTextChange} />
            <ImageUploader setImageUrls={setImageUrls} imageUrls={imageUrls} templateImageUrl={templateImageUrl} textInputs={textInputs} />
        </div>
    );
};

export default TemplateManager;
