import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const ImageMerger = ({ uploadedImageUrl, templateImageUrl, canvasWidth, canvasHeight }) => {
    const canvasRef = useRef(null);
    const [text, setText] = useState('');


    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current, {
            width: canvasWidth,
            height: canvasHeight
        });

        // Cargar la imagen de la plantilla
        fabric.Image.fromURL(templateImageUrl, (templateImg) => {
            // Ajustar la plantilla al tamaño del canvas
            templateImg.scaleToWidth(canvasWidth);
            templateImg.set({
                left: 0,
                top: 0,
                selectable: false,
            });
            canvas.setBackgroundImage(templateImg, canvas.renderAll.bind(canvas), {
                scaleX: canvas.width / templateImg.width,
                scaleY: canvas.height / templateImg.height,
            });

            // Cargar la imagen subida
            fabric.Image.fromURL(uploadedImageUrl, (uploadedImg) => {
                // Calcular la escala necesaria para cubrir el canvas con la imagen subida
                const scaleRatio = Math.max(
                    canvasWidth / uploadedImg.width,
                    canvasHeight / uploadedImg.height
                );

                uploadedImg.set({
                    scaleX: scaleRatio,
                    scaleY: scaleRatio,
                    originX: 'center',
                    originY: 'center',
                });

                // Centrar la imagen en el canvas
                const center = canvas.getCenter();
                uploadedImg.set({
                    left: center.left,
                    top: center.top,
                });

                // Asegúrate de que la imagen subida se recorte para que encaje
                canvas.add(uploadedImg);
                uploadedImg.center();
                uploadedImg.setCoords();

                // Poner la plantilla encima de la imagen subida
                canvas.bringToFront(templateImg);
                canvas.renderAll();
            });
        });

        // Limpieza del canvas al desmontar el componente
        return () => canvas.dispose();
    }, [uploadedImageUrl]);

    // Función para descargar la imagen fusionada
    const downloadMergedImage = () => {
        const dataURL = canvasRef.current.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'merged-image.png';
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };


    return (
        <div>
            <canvas ref={canvasRef} />
            <input type="text" value={text} onChange={handleTextChange} placeholder="Enter text here" />

            <button onClick={downloadMergedImage}>Descargar Imagen</button>
        </div>
    );
};

export default ImageMerger;
