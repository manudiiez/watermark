function ImageUploader({ canvasRef }) {

    const addImageToCanvas = (imgSrc) => {
        const canvas = canvasRef.current;
        const objects = canvas.getObjects();
        console.log(objects);
        if (objects.length === 2) {
            canvas.remove(objects[0]);
        }
        fabric.Image.fromURL(imgSrc, (newImg) => {
            const backgroundImage = canvas.backgroundImage;
            let scaleRatio = 1;

            // Ajustar la nueva imagen al tamaño de la imagen de fondo
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

            // Añadir la nueva imagen detrás de todas las demás
            canvas.add(newImg);
            canvas.sendToBack(newImg);
            canvas.renderAll();
        });
    };

    const handleImageUpload = event => {
        const file = event.target.files[0];
        if (file && file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onload = function (evt) {
                const imgSrc = evt.target.result;
                addImageToCanvas(imgSrc); // Llamar a la función del padre para añadir la imagen
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <input type="file" accept="image/*" onChange={handleImageUpload} />
    );
}

export default ImageUploader;
