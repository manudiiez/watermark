import React from 'react'
import TemplateManager from '../components/TemplateManager/TemplateManager'

const data = {
    title: "PUBLICACIONES INSTAGRAM",
    form_structure: [
        { value: '', name: 'size', x: 71, y: 865, fontSize: 39, label: 'Tamaño', placeholder: 'ancho en px', type: 'number' },
        { value: '', name: 'opacity', x: 71, y: 865, fontSize: 39, label: 'Transparencia', placeholder: '0 - 100', type: 'number' },
    ]
}

const Watermark = () => {
    return (
        <TemplateManager templateImageUrl='./watermark.png' data={data} type="watermark" />
    )
}

export default Watermark