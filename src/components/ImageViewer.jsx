import React, { useState } from 'react';
import ImageCroper from './ImageCroper';
import InputFileReader from './InputFileReader';

const ImageViewer = props => {
    const [ error, setError ] = useState('');
    const [ imageFile, setImageFile ] = useState(null);

    function handleFileChange(file) {
        setError('');
        const type = validateImageFileType(file);
        if (!type) {
            setError('Choose a valid image file! Allowed file types: .jpg, .jpeg, .png');
        }
        setImageFile(file);
    }

    /**
     * Allowed file types: jpg, jpeg, png
     * Ignore upper/lower case
     *
     * @returns string|false
     */
    function validateImageFileType(file) {
        const re = /(jpg|jpeg|png)/i;
        const result = file.name.match(re);

        return (result && result.length > 0) ? 'image' : false;
    }

    return (
        <div>
            <InputFileReader
                handleFileChange={handleFileChange}
            />
            <div className="mt-4 text-red-500">{error}</div>
            <ImageCroper
                image={imageFile}
            />
        </div>
    );
}

export default ImageViewer;
