import React from 'react';

const InputFile = props => {

    return (
        <div className="mt-6">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Image
            </label>
            <div className="mt-1">
                <input
                  type="file"
                  name="image"
                  className="rounded-md"
                />
            </div>
        </div>
    );
}

export default InputFile;
