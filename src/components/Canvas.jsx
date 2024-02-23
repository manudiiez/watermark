import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';
import DownloadButton from './DownloadButton';
import AddTextButton from './AddTextButton';
import ImageUploader from './ImageUploader';
import styled from 'styled-components';

function Canvas({ initialImageSrc }) {
    const canvasRef = useRef(null);
    useEffect(() => {
        // Cargar la imagen recibida en props para establecer el tamaño del canvas
        fabric.Image.fromURL(initialImageSrc, (img) => {
            // Asegurarse de que el canvas se ajuste al tamaño de la imagen inicial
            const canvas = new fabric.Canvas('my-fabric-canvas', {
                width: img.width,
                height: img.height,
            });
            canvasRef.current = canvas;

            // Colocar la imagen en el canvas
            img.set({
                left: 0,
                top: 0,
                selectable: false, // Hace la imagen no seleccionable, si se desea
            });
            canvas.add(img);
            canvas.renderAll();
        });
        // Limpieza al desmontar el componente
        return () => canvasRef.current && canvasRef.current.dispose();
    }, [initialImageSrc]);

    return (
        <Container>
            <div>
                <AddTextButton canvasRef={canvasRef} />
                <DownloadButton canvasRef={canvasRef} />
                <ImageUploader canvasRef={canvasRef} />
                <canvas id="my-fabric-canvas" style={{ visibility: 'hidden' }} />
            </div>

        </Container>
    );
}

export default Canvas;

const Container = styled.div`
padding: 5rem 2rem;
#my-fabric-canvas {
  width: 100%;
  height: auto;
  max-width: 1080px; /* Máximo tamaño visual */
}
`;