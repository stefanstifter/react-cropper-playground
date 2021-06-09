import React from 'react';
import Button from './Button';

const ImageResult = props => {
    const imageData = props.image?.data ?? null;

    function handlePersistClick() {
        const a = document.createElement('a');
        a.href = imageData;
        a.download = 'cropped.png';
        a.click();
    }

    return (
        <div className="mt-12">
            <div className="mb-6 flex justify-between">
                <h3 className="text-lg font-bold">Result</h3>
                {imageData && (
                    <Button onClick={handlePersistClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                        <span className="ml-2">Save</span>
                    </Button>
                )}
            </div>
            {imageData && (
                <div className="flex justify-center">
                    <img
                        src={imageData}
                        className="border rounded-sm"
                        alt="Cropped Image Result"
                    />
                </div>
            )}
        </div>
    );
}

export default ImageResult;
