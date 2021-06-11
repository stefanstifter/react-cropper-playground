import React, { useState } from 'react';
import Divider from './Divider';
import ImageResult from './ImageResult';
import ImageCropper from './ImageCropper';
import InputFileReader from './InputFileReader';

const CropperPlayground = props => {
    const [ error, setError ] = useState('');
    const [ imageFile, setImageFile ] = useState(null);
    const [ croppedImage, setCroppedImage ] = useState(null);

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
        <div className="mb-36">
            <InputFileReader
                handleFileChange={handleFileChange}
            />
            <div className="mt-4 text-red-500">{error}</div>
            <ImageCropper
                image={imageFile}
                handleCroppedImage={setCroppedImage}
            />
            <Divider
                title="fixed aspectRatio, wax-wdith: 1800px, viewMode: 0 (no restrictions)"
            />
            <ImageResult
                image={croppedImage}
            />
        </div>
    );
}

export default CropperPlayground;
