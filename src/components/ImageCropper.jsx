import React, { useEffect, useState } from 'react';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const ImageCropper = props => {
    const [ imageData, setImageData ] = useState(null);

    useEffect(() => {
        if (props.image && props.image?.data) {
            setImageData(props.image.data);
        }
    }, [props.image])

    return (
        <>
            <Cropper
                src={imageData}
                // ref={cropper}
                // src={src}
                // crop={onCrop}
                // ready={setInitialCropBox}
                // Cropper.js options
                aspectRatio={1.41822 / 1}
                style={{ height: 500, width: '100%' }}
                guides={true}
                autoCropArea={1}
                checkOrientation={false}
            />
        </>
    )
}

export default ImageCropper;
