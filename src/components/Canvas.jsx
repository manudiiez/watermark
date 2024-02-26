import React, { useRef, useEffect } from 'react';
import DownloadButton from './DownloadButton';
import AddTextButton from './AddTextButton';
import ImageUploader from './ImageUploader';
import styled from 'styled-components';
import { useCanvas } from '../hooks/useCanvas';

function Canvas({ initialImageSrc }) {
    const { canvasRef, initialCanvas, addImageToCanvas, addTextToCanvas } = useCanvas()
    useEffect(() => {
        initialCanvas('my-fabric-canvas', initialImageSrc)
        return () => canvasRef.current && canvasRef.current.dispose();
    }, [initialImageSrc]);

    return (
        <Container>
            <div>
                <AddTextButton addTextToCanvas={addTextToCanvas} />
                <DownloadButton canvasRef={canvasRef} />
                <ImageUploader addImageToCanvas={addImageToCanvas} />
                <canvas id="my-fabric-canvas" />
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