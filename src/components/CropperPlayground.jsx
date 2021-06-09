import React, { useState } from 'react';
import ImageViewer from './ImageViewer';

const CropperPlayground = props => {
    const [ imageFile, setImageFile ] = useState(null);

    return (
        <div>
            <ImageViewer />
        </div>
    );
}

export default CropperPlayground;
