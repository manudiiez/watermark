import React, { useState } from 'react'
import { ImageUploader } from './ImageUploader';

const Form = ({ formStructure, templateImageUrl, onSubmit }) => {
    const [formData, setFormData] = useState(formStructure);
    const [imageUrls, setImageUrls] = useState([]);

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        const newTextInputs = formData.map(input => {
            if (input.name === name) {
                return { ...input, value: value }
            }
            return input
        })
        setFormData(newTextInputs)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData, imageUrls)
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                formData.map((inputData, index) => (
                    <div key={index} >
                        <p>{inputData.name}</p>
                        <input type="text" name={inputData.name} data-x={inputData.x} data-y={inputData.y} data-size={inputData.fontSize} value={inputData.value} onChange={handleTextChange} />
                    </div>
                ))
            }
            <ImageUploader setImageUrls={setImageUrls} imageUrls={imageUrls} templateImageUrl={templateImageUrl} />
            <button type='submit'>Guardar</button>
        </form>
    )
}

export default Form