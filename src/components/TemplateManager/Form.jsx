import React, { useState } from 'react'
import { ImageUploader } from './ImageUploader';
import styled from 'styled-components';

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
        <Container onSubmit={handleSubmit}>
            {
                formData.map((inputData, index) => (
                    <div key={index} >
                        <p>{inputData.label}</p>
                        <input type="text" name={inputData.name} data-x={inputData.x} data-y={inputData.y} data-size={inputData.fontSize} value={inputData.value} onChange={handleTextChange} />
                    </div>
                ))
            }
            <ImageUploader setImageUrls={setImageUrls} imageUrls={imageUrls} templateImageUrl={templateImageUrl} />
            <button type='submit'>Guardar</button>
        </Container>
    )
}

export default Form


const Container = styled.form`
width: 100%;
max-width: 800px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        background-color: #FFFFFF;
        padding: 20px;
        border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

    >div{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        P{
            font-size: 17px;
        }

        input{
            border: none;
            background-color: #E8ECEF;
            padding: 10px;
        }
    }

    button{
        background-color: #000000;
        padding: 10px;
        border: none;
        cursor: pointer;
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 700;
        &:hover{
            background-color: #BE4436;
        }
    }

`