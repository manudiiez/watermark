import styled from 'styled-components'
import { useCanvas } from '../hooks/useCanvas'
import { useEffect } from 'react';

const AddIgTemplate = () => {
    const { canvasRef, initialCanvas, imageInputFileSelected } = useCanvas()

    useEffect(() => {
        initialCanvas('my-fabric-canvas', './plantilla.png')
        return () => canvasRef.current && canvasRef.current.dispose();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()

    }


    return (
        <Container>
            <h1>Plantilla de Instagram</h1>
            <form>
                <div>
                    <p>Condición</p>
                    <input type="text" placeholder="Ej. ALQUILER" id="condition" />
                </div>
                <div>
                    <p>Ubicacion</p>
                    <input type="text" placeholder="Ej. VILLA PALMARES" id="location" />
                </div>
                <div>
                    <p>Departamento</p>
                    <input type="text" placeholder="Ej. Godoy Cruz - Mendoza" id="zone" />
                </div>
                <div className="datos">
                    <div>
                        <p>Superficie</p>
                        <input type="number" placeholder="Ej. 150" id="surface" />
                    </div>
                    <div>
                        <p>Cochera</p>
                        <input type="text" placeholder="Ej. Cochera Doble" id="garage" />
                    </div>
                </div>
                <div className="datos">
                    <div>
                        <p>Habitaciones</p>
                        <input type="number" placeholder="Ej. 2" id="bed" />
                    </div>
                    <div>
                        <p>Baños</p>
                        <input type="number" placeholder="Ej. 2" id="bath" />
                    </div>
                </div>
                <div>
                    <p>Imagenes</p>
                    <input type="file" onChange={imageInputFileSelected} />
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
/* 
    .canvasContainer{
        height: 0;
        width: 0;
        overflow: hidden;
    } */

`