import React from 'react'
import TemplateManager from '../components/TemplateManager/TemplateManager'

const data = {
    title: "PUBLICACIONES INSTAGRAM",
    form_structure: []
}

const Watermark = () => {
    return (
        <TemplateManager templateImageUrl='./logo.png' data={data} type="watermark" />
    )
}

export default Watermark