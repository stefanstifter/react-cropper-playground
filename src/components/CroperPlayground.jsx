import React, { useState } from 'react';
import ImageViewer from './ImageViewer';

const CroperPlayground = props => {
    const [ imageFile, setImageFile ] = useState(null);

    return (
        <div>
            <ImageViewer />
        </div>
    );
}

export default CroperPlayground;
