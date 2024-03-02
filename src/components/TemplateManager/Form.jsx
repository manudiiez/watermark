import React, { useState } from 'react'
import { ImageUploader } from './ImageUploader';
import styled from 'styled-components';

const Form = ({ formStructure, title, templateImageUrl, onSubmit }) => {
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
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className='inputs'>
                {
                    formData.map((inputData, index) => (
                        <div key={index} >
                            <span>{inputData.label}</span>
                            <input type={inputData.type} name={inputData.name} data-x={inputData.x} data-y={inputData.y} data-size={inputData.fontSize} value={inputData.value} placeholder={inputData.placeholder} onChange={handleTextChange} />
                        </div>
                    ))
                }
            </div>
            <ImageUploader setImageUrls={setImageUrls} imageUrls={imageUrls} />
            <div className='button'>
                <button type='submit'>Guardar</button>
            </div>
        </Container>
    )
}

export default Form


const Container = styled.form`
    background-color: #FFFFFF;
    box-shadow: 0px 2px 10px 0px #3a354119;
    border-radius: 6px;
    width: 100%;
    max-width: 600px;
    .title{
        width: 100%;
        border-bottom: 1px solid #3a35411e;
        padding: 14px;
        margin-bottom: 32px;
        h2{
            font-size: 14px;
            font-weight: 500;
        }
    }

    .inputs{
        padding: 0 14px;
        display: flex;
        flex-direction: column; 
        gap: 20px;
        >div{
            position: relative;
            >span{
                position: absolute;
                color: #3a354160;
                font-size: 12px;
                top: 0;
                left: 15px;
                background-color: #FFFFFF;
                transform: translateY(-50%);
                padding: 0 5px;
            }
            >input{
                border-radius: 6px;
                border: 1px solid #3a35413a;
                padding: 15px 20px;
                width: 100%;
                color: #50565fde;
                font-size: 14px;
                &::placeholder{
                    color: #3a354160;
                }
            }
        }
    }

    .button{
        padding: 14px;
        button{
            width: 100%;
            font-size: 16px;
            padding: 15px;
            border-radius: 6px;
            background-color: #3a354126;
            border: none;
            color: #323438de;
            font-weight: 600;
        }
    }

    @media (min-width: 800px){
        min-width: 400px;
        .title{
            padding: 14px 24px;
            margin-bottom: 38px;
            h2{
                font-size: 16px;
                font-weight: 500;
            }
        }

        .inputs{
            padding: 0 24px;
            >div{
                >span{
                    font-size: 13px;
                }
            }
        }

        .button{
            padding: 24px;
        }
    }

`