import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';
import DownloadButton from './DownloadButton';
import AddTextButton from './AddTextButton';
import ImageUploader2 from './ImageUploader2';

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
        <div>
            <canvas id="my-fabric-canvas" width="600" height="400" />
            <AddTextButton canvasRef={canvasRef} />
            <DownloadButton canvasRef={canvasRef} />
            <ImageUploader2 canvasRef={canvasRef} />

        </div>
    );
}

export default Canvas;
