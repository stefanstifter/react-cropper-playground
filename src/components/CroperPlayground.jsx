import React, { useState } from 'react';
import InuptFile from './InputFile';

const CroperPlayground = props => {
    const [ imageFile, setImageFile ] = useState(null);

    return (
        <div>
            <InuptFile />
        </div>
    );
}

export default CroperPlayground;
