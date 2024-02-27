import React, { useState } from 'react';
import { ImageContainer } from './ImageContainer';

export const ImageUploader = ({ setImageUrls, imageUrls, templateImageUrl }) => {
    const handleFileChange = (event) => {
        const files = event.target.files;
        const urls = Array.from(files).map(file => ({
            url: URL.createObjectURL(file),
            id: `${Date.now()}-${Math.random()}` // Genera un ID único
        }));
        setImageUrls(urls);
    };

    return (
        <div>
            <p>Imagenes</p>
            <input type="file" multiple accept="image/*" onChange={handleFileChange} />
        </div>
    );
};
