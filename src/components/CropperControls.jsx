import React from 'react';
import Button from './Button';

const CropperControls = props => {
    return (
        <div className="max-w-sm mx-auto py-4 flex justify-between">
            <Button>left</Button>
            <Button>right</Button>
            <Button>zoom +</Button>
            <Button>zoom -</Button>
        </div>
    );
}

export default CropperControls;
