import React, { useState } from 'react';
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

        console.log('everything fine so far', {type, file});
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
        </div>
    );
}

export default ImageViewer;
