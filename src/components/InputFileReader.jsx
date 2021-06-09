import React, { useState, useEffect, useRef } from 'react';

const InputFileReader = props => {
    const [ file, setFile ] = useState(null);

    useEffect(() => {
        console.log('file changed', file);

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
                lastModified: file.lastModified,
                type: null,
            });
        }
    }

    return (
        <div className="mt-6">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Image
            </label>
            <div className="mt-1">
                <input
                    onChange={handleFileChange}
                    type="file"
                    name="image"
                />
            </div>
        </div>
    );
}

export default InputFileReader;
