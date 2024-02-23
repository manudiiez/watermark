import React, { useState } from 'react'
import ImageMerger from './components/ImageMerger'
import ImageUploader from './components/ImageUploader';

const App2 = () => {

    const [uploadedImageUrl, setUploadedImageUrl] = useState('');

    const handleImageUpload = (imageUrl) => {
        setUploadedImageUrl(imageUrl);
    };

    return (
        <div>
            <h1>Fusion</h1>
            <ImageUploader onImageUpload={handleImageUpload} />
            <ImageMerger
                uploadedImageUrl={uploadedImageUrl}
                templateImageUrl="./plantilla.png"
                canvasWidth={1080}
                canvasHeight={1080}
            />

        </div>
    )
}

export default App2