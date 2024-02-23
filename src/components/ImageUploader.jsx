import React from 'react';

const ImageUploader = ({ onImageUpload }) => {
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Llama a la función prop con la URL de datos de la imagen
                onImageUpload(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <input type="file" accept="image/*" onChange={handleImageChange} />
    );
};

export default ImageUploader;
