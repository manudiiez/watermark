function DownloadButton({ canvasRef }) {


    const downloadCanvasAsImage = () => {
        const canvas = canvasRef.current;
        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        const link = document.createElement('a');
        link.download = 'canvas-image.png';
        link.href = image;
        link.click();
    };

    return (
        <button onClick={downloadCanvasAsImage}>Descargar Canvas</button>
    );
}

export default DownloadButton;
