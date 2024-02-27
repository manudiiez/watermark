import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import styled from 'styled-components';

const TemplateManager = ({ templateImageUrl }) => {
    const [imageUrls, setImageUrls] = useState([]);
    const [textInputs, setTextInputs] = useState({ text1: '', text2: '' });

    // Manejador para los cambios en el formulario de texto
    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setTextInputs(prevState => ({ ...prevState, [name]: value }));
    };

    // Manejador para la selección de archivos de imagen
    const handleFileChange = (event) => {
        const files = event.target.files;
        const urls = Array.from(files).map(file => ({
            url: URL.createObjectURL(file),
            id: `${Date.now()}-${Math.random()}` // Genera un ID único
        }));
        setImageUrls(urls);
    };

    // Función para ajustar la imagen con un efecto similar a "object-fit: cover"
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

    // Procesamiento de imágenes con Fabric.js
    useEffect(() => {
        if (imageUrls.length > 0) {
            imageUrls.forEach((imageUrl) => {
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
            });
        }
    }, [imageUrls, textInputs, templateImageUrl]);


    const downloadImage = (canvasId) => {
        const canvas = document.getElementById(canvasId);
        if (canvas) {
            // Convertir el canvas a Blob
            canvas.toBlob((blob) => {
                // Crear un URL para el Blob
                const url = URL.createObjectURL(blob);
                // Crear un elemento <a> para iniciar la descarga
                const link = document.createElement('a');
                link.href = url;
                link.download = 'custom-image.jpg'; // Puedes cambiar el nombre del archivo aquí
                document.body.appendChild(link); // Agregar el enlace al cuerpo del documento para asegurar la compatibilidad
                link.click();
                document.body.removeChild(link); // Limpiar agregando y luego eliminando el enlace del DOM
                URL.revokeObjectURL(url); // Liberar el objeto URL
            }, 'image/jpeg', 0.8); // Ajusta el tipo de imagen y la calidad aquí si es necesario
        }
    };


    const removeImage = (idToRemove) => {
        const filteredUrls = imageUrls.filter(image => image.id !== idToRemove);
        setImageUrls(filteredUrls);
    };


    return (
        <div>
            <input type="file" multiple accept="image/*" onChange={handleFileChange} />
            <input
                type="text"
                name="text1"
                value={textInputs.text1}
                onChange={handleTextChange}
                placeholder="Texto 1"
            />
            <input
                type="text"
                name="text2"
                value={textInputs.text2}
                onChange={handleTextChange}
                placeholder="Texto 2"
            />
            {imageUrls.map((image, index) => (
                <Container key={index}>
                    <div className='canvasContainer'>
                        <canvas id={`canvas-${image.id}`} />
                    </div>
                    <div className='image'>
                        <img src={templateImageUrl} alt="" />
                        <img src={image.url} alt="" className='imageChild' />
                    </div>
                    <button onClick={() => downloadImage(`canvas-${image.id}`)}>Descargar Imagen</button>
                    <button onClick={() => removeImage(image.id)}>Eliminar Imagen</button>

                </Container>
            ))}
        </div>
    );
}

export default TemplateManager;


const Container = styled.div`
    .canvasContainer{
        height: 0;
        width: 0;
        overflow: hidden;
    }
    .image{
        position: relative;
        width: fit-content;
        .imageChild{
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: calc(100% - 4px);
            object-fit: cover;
        }
        img{
            width: 100%;
        }
    }

`