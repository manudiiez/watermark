import { useState } from 'react';
import { fabric } from 'fabric';

export const useCanvasProcessor = (templateImageUrl, formStructure, type) => {
    const [imageUrls, setImageUrls] = useState([]);
    const [textInputs, setTextInputs] = useState(formStructure);

    //TYPE PROCESSOR
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
                if (textInputs.length > 0) {
                    textInputs.map(input => {
                        canvas.add(addTextToCanvas(input.value, input.x, input.y, input.fontSize));
                    })
                }
                canvas.renderAll();
            });
        });
    };

    const addTextToCanvas = (text, x, y, fontSize) => {
        const textOptions = {
            left: x,
            top: y,
            fill: 'white',
            fontFamily: 'Arial',
            fontSize: fontSize,
            fontWeight: 'bold',
        }
        return text = new fabric.Text(text, textOptions);
    }


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

    const saveForm = (formData, imageUrls) => {
        setImageUrls(imageUrls)
        setTextInputs(formData)
        imageUrls.forEach((imageUrl) => {
            processImage(imageUrl, formData, templateImageUrl);
        });
    }

    const removeImage = (idToRemove) => {
        setImageUrls(prevUrls => prevUrls.filter(image => image.id !== idToRemove));
    };


    return {
        setImageUrls,
        setTextInputs,
        saveForm,
        removeImage,
        imageUrls,
        textInputs,
    };
};
