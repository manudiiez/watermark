import React from 'react';
import { ImageUploader } from './ImageUploader';
import { useCanvasProcessor } from '../hooks/useCanvasProcessor';

const TemplateManager = ({ templateImageUrl }) => {
    const { setImageUrls, setTextInputs, imageUrls, textInputs } = useCanvasProcessor(templateImageUrl);

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setTextInputs(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <div>
            <input type="text" name="text1" value={textInputs.text1} onChange={handleTextChange} placeholder="Texto 1" />
            <input type="text" name="text2" value={textInputs.text2} onChange={handleTextChange} placeholder="Texto 2" />
            <ImageUploader setImageUrls={setImageUrls} imageUrls={imageUrls} templateImageUrl={templateImageUrl} textInputs={textInputs} />
        </div>
    );
};

export default TemplateManager;
