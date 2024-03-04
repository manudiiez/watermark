import React from 'react';
import { useCanvasProcessor } from '../../hooks/useCanvasProcessor';
import Form from './Form';
import styled from 'styled-components';
import ImagesListSelected from './ImagesListSelected';

const TemplateManager = ({ templateImageUrl, data, type }) => {
    const { setTextInputs, saveForm, removeImage, textInputs, imageUrls } = useCanvasProcessor(templateImageUrl, data?.form_structure);
    return (
        <Container>
            <Form formStructure={textInputs} title={data.title} setTextInputs={setTextInputs} templateImageUrl={templateImageUrl} onSubmit={saveForm} />
            <ImagesListSelected imageUrls={imageUrls} templateImageUrl={templateImageUrl} removeImage={removeImage} />
        </Container>
    );
};

export default TemplateManager;

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
.imagesContainer{
    border-radius: 6px;
    background-color: #ffffff;
    overflow: hidden;
    box-shadow: 0px 2px 10px 0px #3a354119;
    width: 100%;
    >p{
        padding: 0 14px;
        padding-bottom: 14px;
    }
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
    .content{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
    }
}
@media (min-width: 1000px) {
    flex-direction: row;
    .imagesContainer{
        .title{
            padding: 14px 24px;
            margin-bottom: 38px;
            h2{
                font-size: 16px;
                font-weight: 500;
            }
        }
        >p{
            padding: 0 24px;
            padding-bottom: 24px;
        }
    }
}
`