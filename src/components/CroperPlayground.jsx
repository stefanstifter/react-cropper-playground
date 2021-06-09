import React, { useState } from 'react';
import InputFileReader from './InputFileReader';

const CroperPlayground = props => {
    const [ imageFile, setImageFile ] = useState(null);

    return (
        <div>
            <InputFileReader />
        </div>
    );
}

export default CroperPlayground;
