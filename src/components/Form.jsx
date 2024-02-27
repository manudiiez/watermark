import React from 'react'

const Form = ({ formStructure, handleTextChange }) => {
    return (
        <div>
            {
                formStructure.map((inputData, index) => (
                    <div key={index} >
                        <p>{inputData.name}</p>
                        <input type="text" name={inputData.name} data-x={inputData.x} data-y={inputData.y} data-size={inputData.fontSize} value={inputData.value} onChange={handleTextChange} />
                    </div>
                ))
            }
        </div>
    )
}

export default Form