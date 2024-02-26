import { useRef, useState } from "react";
import { fabric } from 'fabric';

export const useCanvas = () => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);

    const initialCanvas = (id, initialImageSrc) => {
        fabric.Image.fromURL(initialImageSrc, (img) => {
            const canvas = new fabric.Canvas(id, {
                width: img.width,
                height: img.height,
            });
            canvasRef.current = canvas;
            img.set({
                left: 0,
                top: 0,
                selectable: false,
            });
            canvas.add(img);
            canvas.renderAll();
        });
    }


    const addTextToCanvas = (text, x, y, fontSize) => {
        const canvas = canvasRef.current;
        const newText = new fabric.Text(text, {
            left: x,
            top: y,
            fill: 'white',
            fontFamily: 'Arial',
            fontSize: fontSize,
            fontWeight: 'bold',

        });
        canvas.add(newText);
    }

    const addImageToCanvas = (imgSrc) => {
        const canvas = canvasRef.current;
        fabric.Image.fromURL(imgSrc, (newImg) => {
            const backgroundImage = canvas.backgroundImage;
            let scaleRatio = 1;
            if (backgroundImage) {
                scaleRatio = Math.max(
                    backgroundImage.width / newImg.width,
                    backgroundImage.height / newImg.height
                );
            } else {
                // Si no hay una imagen de fondo, ajusta la nueva imagen al canvas
                scaleRatio = Math.max(
                    canvas.width / newImg.width,
                    canvas.height / newImg.height
                );
            }
            newImg.set({
                scaleX: scaleRatio,
                scaleY: scaleRatio,
                originX: 'center',
                originY: 'center',
                left: canvas.width / 2,
                top: canvas.height / 2,
                selectable: false,
            });
            canvas.add(newImg);
            canvas.sendToBack(newImg);
            canvas.renderAll();
        });
    };

    const imageInputFileSelected = (e) => {
        const file = e.target.files[0];
        if (file && file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onload = function (evt) {
                const imgSrc = evt.target.result;
                console.log(imgSrc);
                setImages(imgSrc);
            };
            reader.readAsDataURL(file);
        }
    }

    return { canvasRef, initialCanvas, addImageToCanvas, addTextToCanvas, imageInputFileSelected }

}
