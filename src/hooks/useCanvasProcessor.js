import { useState, useEffect } from 'react';
import { fabric } from 'fabric';

export const useCanvasProcessor = (templateImageUrl) => {
    const [imageUrls, setImageUrls] = useState([]);
    const [textInputs, setTextInputs] = useState({ text1: '', text2: '' });

    useEffect(() => {
        if (imageUrls.length > 0) {
            imageUrls.forEach((imageUrl) => {
                processImage(imageUrl, textInputs, templateImageUrl);
            });
        }
    }, [imageUrls, textInputs, templateImageUrl]);

    const processImage = (imageUrl, textInputs, templateImageUrl) => {
        fabric.Image.fromURL(templateImageUrl, (template) => {
            const canvas = new fabric.Canvas(`canvas-${imageUrl.id}`, {
                width: template.width,
                height: template.height,
            });

            // Agregar imagen de fondo
            fabric.Image.fromURL(imageUrl.url, (bgImg) => {
                adjustImage(bgImg, canvas);
                canvas.setBackgroundImage(bgImg, canvas.renderAll.bind(canvas));

                // Agregar imagen de plantilla
                template.set({
                    left: 0,
                    top: 0,
                    scaleX: canvas.width / template.width,
                    scaleY: canvas.height / template.height,
                });
                canvas.add(template);
                canvas.moveTo(template, 0);

                // Añadir texto
                const textOptions1 = {
                    left: 50,
                    top: 50,
                    fontSize: 20,
                    fill: '#000', // Cambiar según el diseño
                };
                const text1 = new fabric.Text(textInputs.text1, textOptions1);
                canvas.add(text1);

                const textOptions2 = {
                    left: 50,
                    top: 100,
                    fontSize: 20,
                    fill: '#000', // Cambiar según el diseño
                };
                const text2 = new fabric.Text(textInputs.text2, textOptions2);
                canvas.add(text2);

                canvas.renderAll();
            });
        });
    };


    const adjustImage = (img, canvas) => {
        const imgAspectRatio = img.width / img.height;
        const canvasAspectRatio = canvas.width / canvas.height;
        let left, top, scaleFactor;

        if (imgAspectRatio > canvasAspectRatio) {
            // La imagen es más ancha que el canvas
            scaleFactor = canvas.height / img.height;
            left = (canvas.width - img.width * scaleFactor) / 2;
            top = 0;
        } else {
            // La imagen es más alta que el canvas
            scaleFactor = canvas.width / img.width;
            top = (canvas.height - img.height * scaleFactor) / 2;
            left = 0;
        }

        img.set({
            scaleX: scaleFactor,
            scaleY: scaleFactor,
            top: top,
            left: left,
        });
    };

    return {
        setImageUrls,
        setTextInputs,
        imageUrls,
        textInputs,
    };
};
