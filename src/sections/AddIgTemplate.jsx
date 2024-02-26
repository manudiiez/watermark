import styled from 'styled-components'
import { useCanvas } from '../hooks/useCanvas'
import { useEffect, useState } from 'react';

const AddIgTemplate = () => {
    const { canvasRef, initialCanvas, imageInputFileSelected, addTextToCanvas, addImageToCanvas, images } = useCanvas()
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        initialCanvas('my-fabric-canvas', './plantilla.png')
        return () => canvasRef.current && canvasRef.current.dispose();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        formData.map(item => {
            if (item.name == 'garage' && item.value.split(' ').length === 2) {
                const garage = item.value.split(' ')
                addTextToCanvas(garage[0], parseInt(item.x), parseInt(item.y), parseInt(item.size))
                addTextToCanvas(garage[1], 921, 890, parseInt(item.size))
            } else {
                addTextToCanvas(item.value, parseInt(item.x), parseInt(item.y), parseInt(item.size))
            }
        })
        images.map(item => {
            addImageToCanvas(item)
        })
    }

    const handleChange = (e) => {
        const input = e.target
        const { name, value } = input
        const x = e.target.getAttribute('data-x')
        const y = e.target.getAttribute('data-y')
        const size = e.target.getAttribute('data-size')
        const index = formData.findIndex(item => item.name === name)
        if (index > -1) {
            const newFormData = [...formData]
            newFormData[index] = { ...newFormData[index], value, x, y, size }
            setFormData(newFormData)
        } else {
            setFormData(prev => [...prev, { name, value, x, y, size }])
        }
    }

    return (
        <Container>
            <h1>Plantilla de Instagram</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Condición</p>
                    <input type="text" placeholder="Ej. ALQUILER" data-x='71' data-y='865' data-size='39' name="condition" onChange={handleChange} />
                </div>
                <div>
                    <p>Ubicacion</p>
                    <input type="text" placeholder="Ej. VILLA PALMARES" data-x='71' data-y='910' data-size='33' name="location" onChange={handleChange} />
                </div>
                <div>
                    <p>Departamento</p>
                    <input type="text" placeholder="Ej. Godoy Cruz - Mendoza" data-x='71' data-y='945' data-size='35' name="zone" onChange={handleChange} />
                </div>
                <div className="datos">
                    <div>
                        <p>Superficie</p>
                        <input type="number" placeholder="Ej. 150" data-x='921' data-y='800' data-size='23' name="surface" onChange={handleChange} />
                    </div>
                    <div>
                        <p>Cochera</p>
                        <input type="text" placeholder="Ej. Cochera Doble" data-x='921' data-y='865' data-size='22' name="garage" onChange={handleChange} />
                    </div>
                </div>
                <div className="datos">
                    <div>
                        <p>Habitaciones</p>
                        <input type="number" placeholder="Ej. 2" data-x='921' data-y='950' data-size='22' name="bed" onChange={handleChange} />
                    </div>
                    <div>
                        <p>Baños</p>
                        <input type="number" placeholder="Ej. 2" data-x='921' data-y='1025' data-size='22' name="bath" onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <p>Imagenes</p>
                    <input type="file" name='images' multiple onChange={imageInputFileSelected} />
                </div>
                <button>Descargar</button>
            </form>
            <div className='canvasContainer'>
                <canvas id="my-fabric-canvas" />
            </div>
        </Container>
    )
}

export default AddIgTemplate

const Container = styled.section`
padding: 20px;
    h1{
        font-size: 30px;
    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px 10px;
        gap: 20px;
        div {
            width: 100%;
            p {
                font-size: 16px;
                font-weight: 600;
                color: #000;
                margin-bottom: 10px
            }
            input {
                width: 100%;
                border: none;
                background-color: #f1f1f1;
                padding: 20px;
                border-radius: 15px;
                font-size:14px
            }
        }
        
        .datos{
            display: grid;
            gap: 20PX;
        }

        button{
            background-color: #000;
            border: none;
            padding: 20px;
            border-radius: 15px;
            color: #ffffff;
            font-size: 16px;
            cursor: pointer;
        }

    }

    .canvasContainer{
        height: 0;
        width: 0;
        overflow: hidden;
    }

`