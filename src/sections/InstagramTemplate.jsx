import styled from "styled-components"
import TemplateManager from "../components/TemplateManager/TemplateManager"
const formStructure = [
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


const InstagramTemplate = () => {
    return (
        <Container>
            <div className="containerTitle">
                <h2>Plantilla de Instagram</h2>
            </div>
            <TemplateManager templateImageUrl='./plantilla.png' formStructure={formStructure} />
        </Container>
    )
}

export default InstagramTemplate

const Container = styled.section`
display: flex;
flex-direction: column;
gap: 10px;
    .containerTitle{
        background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

        padding: 20px;
        border-radius: 8px;
        >h2{
            font-size: 18px;
        }
    }
`