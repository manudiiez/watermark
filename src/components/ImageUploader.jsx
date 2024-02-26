function ImageUploader({ addImageToCanvas }) {

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
        <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
    );
}

export default ImageUploader;
