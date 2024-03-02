import TemplateManager from "../components/TemplateManager/TemplateManager"

const data = {
    title: "PUBLICACIONES INSTAGRAM",
    form_structure: [
        { value: '', name: 'condition', x: 71, y: 865, fontSize: 39, label: 'Condición', placeholder: 'ALQUILER', type: 'text' },
        { value: '', name: 'location', x: 71, y: 910, fontSize: 33, label: 'Ubicación', placeholder: 'VILLA PALMARES', type: 'text' },
        { value: '', name: 'zone', x: 71, y: 945, fontSize: 35, label: 'Departamento', placeholder: 'Godoy Cruz - Mendoza', type: 'text' },
        { value: '', name: 'surface', x: 921, y: 800, fontSize: 23, label: 'Superficie', placeholder: '150', type: 'text' },
        { value: '', name: 'garage', x: 921, y: 865, fontSize: 22, label: 'Cochera', placeholder: 'Cochera', type: 'text' },
        { value: '', name: 'garage2', x: 921, y: 890, fontSize: 22, label: 'Cochera+', placeholder: 'Doble', type: 'text' },
        // {value: '', name: 'garage', x: 921, y: 890, fontSize: 22},
        { value: '', name: 'bed', x: 921, y: 950, fontSize: 22, label: 'Habitaciones', placeholder: '3', type: 'number' },
        { value: '', name: 'bath', x: 921, y: 1025, fontSize: 22, label: 'Baños', placeholder: '2', type: 'number' },
    ]
}


const InstagramTemplate = () => {
    return (
        <TemplateManager templateImageUrl='./plantilla.png' data={data} />
    )
}

export default InstagramTemplate