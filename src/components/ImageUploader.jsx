import React from 'react';
import { ImageContainer } from './ImageContainer';

export const ImageUploader = ({ setImageUrls, imageUrls, templateImageUrl, textInputs }) => {
    const handleFileChange = (event) => {
        const files = event.target.files;
        const urls = Array.from(files).map(file => ({
            url: URL.createObjectURL(file),
            id: `${Date.now()}-${Math.random()}` // Genera un ID único
        }));
        setImageUrls(urls);
    };

    const removeImage = (idToRemove) => {
        setImageUrls(prevUrls => prevUrls.filter(image => image.id !== idToRemove));
    };

    return (
        <div>
            <input type="file" multiple accept="image/*" onChange={handleFileChange} />
            {imageUrls.map((image) => (
                <ImageContainer key={image.id} image={image} templateImageUrl={templateImageUrl} removeImage={removeImage} />
            ))}
        </div>
    );
};
