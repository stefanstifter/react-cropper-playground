import React, { useState, useEffect, useRef } from 'react';

const InputFileReader = props => {
    const [ file, setFile ] = useState(null);

    useEffect(() => {
        if (file) {
            props.handleFileChange(file);
        }
    }, [file]);

    function handleFileChange(event) {
        const reader = new FileReader();
        const file = event.target.files[0];
        if (!file) return;
        reader.readAsDataURL(file);
        reader.onload = () => {
            const fileData = reader.result;
            setFile({
                data: reader.result,
                name: file.name,
                size: file.size,
                type: file.type,
                lastModified: file.lastModified,
            });
        }
    }

    return (
        <div className="mt-6">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Choose your image
            </label>
            <div className="mt-1">
                <input
                    onChange={handleFileChange}
                    type="file"
                    name="image"
                    accept=".jpg, .jpeg, .png"
                />
            </div>
        </div>
    );
}

export default InputFileReader;
