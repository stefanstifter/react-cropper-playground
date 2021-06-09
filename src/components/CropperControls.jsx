import React, { useEffect } from 'react';
import Button from './Button';

const CropperControls = props => {
    const cropper = props.cropper?.current?.cropper ?? null;

    return (
        <div className="max-w-sm mx-auto py-4 flex justify-between">
            <Button
                onClick={() => cropper.zoom(0.2)}
            >
                zoom +
            </Button>
            <Button
                onClick={() => cropper.zoom(-0.2)}
            >
                zoom -
            </Button>
            <Button
                onClick={() => cropper.rotate(10)}
            >
                left
            </Button>
            <Button
                onClick={() => cropper.rotate(-10)}
            >
                right
            </Button>
        </div>
    );
}

export default CropperControls;
